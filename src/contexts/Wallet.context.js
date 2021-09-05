import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer
} from 'react';
import WalletConnectProvider from '@walletconnect/web3-provider'

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: 'a6ca7a0157184aedbafef89ee4794dc2',
      rpc: {
        56: 'https://bsc-dataseed.binance.org/'
      },
      network: 'binance'
    }
  }
}

const WalletContext = createContext([]);

const useWalletContext = () => useContext(WalletContext);

let provider;
const initialState = () => ({
  connected: false,
  address: "",
  connectDisabled: false,
  networkName: "",
  balance: "",
  balanceInWei: "",
  isInsufficient: false,
  loading: false
});
let web3;

const WALLET_REDUCER = 'wallet/WALLET_REDUCER';

const reducer = (
  state,
  { type, payload }
) => {
  const { isOpen } = payload;
  switch (type) {
    case WALLET_REDUCER:
      return {
        ...state,
        isOpen
      };
    default: {
      throw new Error(`Unknown action type ${type}`);
    }
  }
};

export function ModalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, initialState);

  const update = useCallback((payload) => {
    dispatch({
      type: WALLET_REDUCER,
      payload
    });
  }, []);

  return (
    <ModalContext.Provider
      value={useMemo(() => [state, { update }], [state, update])}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const [state, { update }] = useWalletContext();

  const toggleModal = (isOpen) => {
    update({ isOpen });
  };
  return [state, toggleModal];
};
