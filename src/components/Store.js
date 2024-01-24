import React, { useState } from 'react'

function Store({ total, updateTotal, scannedItems, setScannedItems, scannedPrices, setScannedPrices }) {
    const [items, setItems] = useState({
        names: ['Potatoes', 'Tomatoes',
        'Chips', 'Rice', 'Water', 'Coffee'],
        prices: [2.5, 3.3, 5, 12.2, 15, 8.9]
    })

    const handleAddition = (e) => {
        let newTotal;
        let input = parseFloat(e.target.value);
        let indexOfInput = items.prices.indexOf(input);
        let name = items.names[indexOfInput];
        setScannedItems((prevList) => [...prevList, name]);
        setScannedPrices((prevList) => [...prevList, input]);

        console.log(scannedPrices);

        if(Number.isInteger(input)){
            newTotal = total + input;
            newTotal = parseFloat(`${newTotal}.0`);
        }else{
            newTotal = (Math.round((total + input) * 10) / 10);
        }
        updateTotal(newTotal);
        
    }

  return (
    <div className='store'>
      <div>
        <p id='store-label'>Store</p>
      </div>
      <div id='shop'>
        {items.names.map((item, index) => {
            return(
                <div className='items'>
                    <p className='item-names'>{item}</p>
                    <p>${items.prices[index]}</p>
                    <button className='buy-button' onClick={handleAddition} value={items.prices[index]}>Buy</button>
                </div>
            )
        })}
        <div>

        </div>
      </div>
    </div>
  )
}

export default Store
