import React from 'react'

import './expenseLog.css'

const ExpenseLog = ({xp, deleteLog, date, detail, sp, id, currencySymbol }) => {
    return (  
        <div className='expenseLog'>
                <div className='delete' onClick={() => deleteLog(xp, id, -sp)}>X</div>
                <div className='date'><p>{date.day}<br /> {date.month}</p></div>
                <div className='detail'><p>{detail}</p></div>
                <div className='sp'>
                    <p style={Math.sign(sp) === -1 ?
                         {color: 'red'} :
                          Math.sign(sp) === 1 ?
                           {color: 'green'} :
                            null}>

                        {currencySymbol}
                            {sp.toFixed(2)}
                    </p>
                 </div> 
        </div>
    
    )
}

export default ExpenseLog