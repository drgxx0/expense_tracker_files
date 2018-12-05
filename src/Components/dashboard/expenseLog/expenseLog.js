import React from 'react'

import './expenseLog.css'

const ExpenseLog = (props) => {
    return (  
        <div className='expenseLog'>
                <div className='delete' onClick={() => props.deleteLog(props.id, -props.sp)}>X</div>
                <div className='date'><p>{props.date.day}<br /> {props.date.month}</p></div>
                <div className='detail'><p>{props.detail}</p></div>
                <div className='sp'>
                    <p style={Math.sign(props.sp) === -1 ?
                         {color: 'red'} :
                          Math.sign(props.sp) === 1 ?
                           {color: 'green'} :
                            null}>

                        {props.currency === 'PEN' ?
                        'S/.' : null}
                            {props.sp.toFixed(2)}
                        {props.currency === 'PEN' ?
                        null :'$'}
                    </p>
                 </div> 
        </div>
    
    )
}

export default ExpenseLog