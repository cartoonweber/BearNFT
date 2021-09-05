import React from "react";

function Wallet ({isOpen, onClose, handleConnectMetamask}) {
  return (
  	<div>
	  	{
	  		isOpen ? (
	  			<div>
						<ul style={{listStyle: 'none', padding: 0}}>
							<li><button onClick={handleConnectMetamask}>Meta Mask</button></li>
							<li><button>Trus Wallet</button></li>
						</ul>
					</div>
	  		) : null
	  	}
  	</div>
  )
}

export default Wallet;