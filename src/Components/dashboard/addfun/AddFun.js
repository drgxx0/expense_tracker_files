import React, { useState, useRef, useEffect } from 'react'

import 'Components/dashboard/addexpense/addExpense.css'

const AddFun = (props) => {
    const [fund, setFund] = useState('')
    const [err, setError] = useState('')
    
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [inputRef])

    const handleAddingFund = () => {
        const numb = parseInt(fund)
        if(fund.length) {
            props.addingExpense('Reload', numb)
            props.addingFund(numb)
            props.onCloseModal(false)
        } else {
            setFund('')
            setError('Please add a fund')
            inputRef.current.focus()
        }
        
    }

    return (
        <div className='addexp'>
            <h2>Add fund</h2>
            <div className='form'>
                <p>Fund:</p><input ref={inputRef} type='text' placeholder='$' value={fund} onChange={(e) => setFund(e.target.value)} />
            </div>
            <div className='addBtn' onClick={handleAddingFund}>Add</div>
            {err.length ? <p style={{color: 'red'}}>{err}</p> : null}
        </div>
    )
}

export default AddFun