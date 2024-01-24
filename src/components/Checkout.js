import React from 'react'

function Checkout({ total, scannedItems, scannedPrices }) {
    const scannedItemsList = scannedItems.map((item, index) => {
        return(
            <li>{item} ${scannedPrices[index]}</li>
        )
    })
    const scannedItemsPrices = scannedPrices.map((price) => {
        return(<li>{price}</li>)
    })

    const TotalValue = () => {
        return(
            <div id='total-value'>
                <p id='total-price'>$ {total}</p>
                <p>Total</p>
            </div>
        )
    }

    const Products = () => {
        return(
            <div id='products'>
                <div id='list-products'>
                    <ul>{scannedItemsList}</ul>
                </div>
                <div id='button-div'>
                    <button className='buy-button'>Checkout</button>
                </div>
            </div>
        )
    }
  return (
    <div id='checkout'>
        <TotalValue/>
        <br/>
        <Products/>
    </div>
  )
}

export default Checkout
