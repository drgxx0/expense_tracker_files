import React, { useState, useRef, useEffect } from 'react'

import 'Components/dashboard/addexpense/addExpense.css'

const AddFun = ({logExpense, modalManage, addFund, handleError, error, currencySymbol }) => {
    const [fund, setFund] = useState('')
    
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [inputRef])

    const handleAddingFund = () => {
        const numb = parseFloat(fund)
        if(fund.length) {
            logExpense('Reload', numb)
            addFund(numb)
            modalManage(false)
        } else {
            setFund('')
            handleError(true, 'Please add a fund')
            inputRef.current.focus()
        }
        
    }

    return (
        <div className='addexp'>
            <h2>Add fund</h2>
            <div className='form'>
                <p>Fund:</p><input ref={inputRef} type='text' placeholder={currencySymbol} value={fund} onChange={(e) => setFund(e.target.value)} />
            </div>
            <div className='addBtn' onClick={handleAddingFund}>Add</div>
            {error.stat ? <p style={{color: 'red'}}>{error.message}</p> : null}
        </div>
    )
}

export default AddFun