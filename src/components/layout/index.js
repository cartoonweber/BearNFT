import React from 'react';
import Sidebar from '../sidebar'
import Header from '../header'

function Layout({children}) {
  return (
    <div>
      <Header />
      <div style={{display: "flex", width: '100%', position: 'absolute', top: 0}}>
        <Sidebar />
        <div style={{width: '100%', marginTop: '100px', padding: '10px'}}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;