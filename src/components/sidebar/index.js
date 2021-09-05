import React, { useEffect } from 'react';
import { useEthers } from "@usedapp/core";

import { createBrowserHistory } from 'history'

const history = createBrowserHistory({forceRefresh:true});

function Sidebar() {
  const {activateBrowserWallet, deactivate, account} = useEthers()

  // const loadWeb3 = async () => {
  //   if(!account) {
  //     history.push('/')
  //   }
  // }

  const logout = async () => {
    deactivate();
  }

  useEffect(() => {
    console.log(account);
    // deactivate();
    // if(!account) {
    //   history.push('/')
    // }
  }, [account])

  return (
    <div style={{width: 400, height: '100vh', backgroundColor: "#242730", borderRadius: "0 40px 40px 0"}}>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Sidebar;