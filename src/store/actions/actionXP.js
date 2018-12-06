import * as actionTypes from 'store/actions/actionTypes'

const monthArr = ['Ene', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


const expenseToAdd = (expense) => {
    return {
        type: actionTypes.ADD_EXPENSE,
        expense
    }
}

const expenseToDel = (deleted, sp) => {
    return {
        type: actionTypes.DEL_EXPENSE, 
        deleted,
        sp
    }
}

export const logExpense = (desc, sp, id) => {
   return dispatch => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const monthLetter = monthArr[month]

        const now = Date.now();
        const result = {
            id: now,
            date: {
                day,
                month: monthLetter
            },
            detail: desc,
            sp
        }
        dispatch(expenseToAdd(result))
   } 
}

export const addFund = (fund) => {
    return {
        type: actionTypes.ADD_FUND,
        fund
    }
}

export const deleteLog = (xp, id, sp) => {
    return dispatch => {
        const filter = xp.filter(logs => {
            return id !== logs.id
        })
        dispatch(expenseToDel(filter, sp))
    }
}

const submitChangeRate = (newTotal, newArray) => {
    return {
        type: actionTypes.CALCULATE_RATE,
        newTotal,
        newArray
    }
}

const changeCurrency = (newCu) => {
    return {
        type: actionTypes.CHANGE_CURRENCY,
        newCu
    }
}

export const handleCurrency = (nowCu, nextCu, total, xp) => {
    return dispatch => {
        fetch(`https://free.currencyconverterapi.com/api/v6/convert?q=${nowCu}_${nextCu}&compact=ultra`)
        .then(resp => resp.json())
        .then(json =>{
            const rate = Object.values(json)[0]

            const rateTotal = total * rate
            const redu = xp.reduce((acc, data, i) => {
                const newValue = {
                    ...data,
                    sp: data.sp * rate
                }
                return acc.concat(newValue)
            }, [])
            dispatch(submitChangeRate(rateTotal, redu))
            dispatch(changeCurrency(nextCu))

        })
    }
}