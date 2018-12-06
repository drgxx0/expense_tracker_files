import * as actionTypes from 'store/actions/actionTypes'

const initialState = {
    route: '',
    modal: false,
    modalRoute: '',
    loading: false,
    error: {
        stat: false,
        message: ''
    }
}

const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ROUTE:
            return {
                ...state,
                route: action.route
            }
        case actionTypes.MODAL_MANAGE:
            return {
                ...state,
                modal: action.stat,
                modalRoute: action.route
            }
        case actionTypes.ERROR_MANAGE:
            return {
                ...state,
                error: {
                    stat: action.stat,
                    message: action.message
                }
            }
        case actionTypes.LOADING:
            return {
                ...state,
                loading: action.stat
            }
        default:
            return state
    }
}

export default uiReducer