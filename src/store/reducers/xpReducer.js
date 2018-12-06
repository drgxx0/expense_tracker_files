import * as actionTypes from 'store/actions/actionTypes'

const initialState = {
    xp: [],
    total: 0,
    currency: 'USD'
}

const xpReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_EXPENSE:
            if(action.expense.detail === 'Reload') {
                return {
                    ...state,
                    xp: [
                        ...state.xp,
                        action.expense
                    ]
                }
            } 
            return {
                ...state,
                total: state.total + action.expense.sp,
                xp: [
                    ...state.xp,
                    action.expense
                ]
        }
        case actionTypes.ADD_FUND:
            return {
                ...state,
                total: state.total + action.fund
            }
        case actionTypes.CHANGE_CURRENCY:
            return {
                ...state,
                currency: action.newCu
            }
        case actionTypes.DEL_EXPENSE:
            return {
                ...state,
                total: state.total + action.sp,
                xp: action.deleted
            }
        case actionTypes.CALCULATE_RATE:
            return {
                ...state,
                total: action.newTotal,
                xp: action.newArray
            }
        default:
            return state
    }
}

export default xpReducer