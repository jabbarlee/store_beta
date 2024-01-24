import logo from './logo.svg';
import './App.css';
import Store from './components/Store'
import Checkout from './components/Checkout';
import { useState } from 'react';

function App() {
  const [total, setTotal] = useState(0);
  const [scannedItems, setScannedItems] = useState([])
  const [scannedPrices, setScannedPrices] = useState([])

  const updateTotal = (newTotal) => {
    setTotal(newTotal);
  }
  return (
    <div className="App">
      <div id='store-side'>
        <Store scannedPrices={scannedPrices} setScannedPrices={setScannedPrices} total={total} updateTotal={updateTotal} scannedItems={scannedItems} setScannedItems={setScannedItems}/>
      </div>
      <div id='checkout-side'>
        <Checkout scannedPrices={scannedPrices} total={total} scannedItems={scannedItems}/>
      </div>
    </div>
  );
}

export default App;
