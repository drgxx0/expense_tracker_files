import React, { useState, useRef } from 'react'

import './addExpense.css'

const AddExpense = (props) => {
    
    const [desc, setDesc] = useState('');
    const [sp, setSp] = useState('');
    const [err, setErr] = useState('')

    const inputRef = useRef(null)

    const reset = () => {
            setDesc('');
            setSp('');
            inputRef.current.focus()
    }

    const handleAdded = () => {
        if(props.total === 0) {
            setErr('Please add funds')
            reset()
        } else if(sp.length && desc.length) {
            props.addingExpense(desc, -sp)
            setErr('')
            reset()
            if(props.onCloseModal) {
                props.onCloseModal(false)
            } else {
                return null
            }  
        } else if (sp < props.total) {
            setErr('Please provide valid information and try again')
            reset()         
        } else {
        setErr('Please provide valid information and try again')
        reset()
        }
    }

    return (
        <div className='addexp'>
            <h2>Add an expense</h2>
            <div className='form'>
                <p>Description:</p><input ref={inputRef} type='text' placeholder='Description' value={desc} onChange={(e) => setDesc(e.target.value)} />
                <p>Spend:</p><input type='text' placeholder='$' value={sp} onChange={(e) => setSp(e.target.value)} />
            </div>
            <div className='addBtn' onClick={handleAdded}>Add</div>
            {err.length ? <p style={{color: 'red'}}>{err}</p>: null}
        </div>
    )
}

export default AddExpense