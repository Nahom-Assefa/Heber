import React from 'react';

function MarketMap() {
  
  return (
    <div style={ { justifyContent: 'space-evenly', alignItems: 'center', textAlign: 'center', height: '400px', alignContent: 'center' } }>
        <header style={ { fontWeight: 500, fontSize: 'x-large' } }>How do you get to us?</header>
        <p>Where we are located</p>
        <button style={ { background: 'green', color: 'white', padding: ( 10, 15 ), backgroundColor: '#006400', border: '1px solid white', borderRadius: 20, cursor: 'pointer' } }>Get directions</button>
    </div>
  );
}

export default MarketMap;