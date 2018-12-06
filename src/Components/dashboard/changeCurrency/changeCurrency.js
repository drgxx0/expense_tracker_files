import React, { useRef } from 'react'

const changeCurrency = ({currency, handleCurrency, total, xp, changeCurrenciesSymbol}) => {

    const currenRef = useRef('USD')

    const handleChange = (e) => {
        handleCurrency(currency, e.target.value, total, xp)
        changeCurrenciesSymbol(e.target.value)
    }

    return (
        <React.Fragment>
            <span>Change currency: </span>
            <select ref={currenRef} onChange={handleChange}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="PEN">PEN</option>
            </select> 
        </React.Fragment>
    )
}

export default changeCurrency