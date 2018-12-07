import * as actionTypes from 'store/actions/actionTypes'

const initialState = {
    users: [{
        username: 'test', 
        password: '1234'
    }],
    auth: true,
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH:
            return {
                ...state,
                auth: action.stat
            }
        default:
            return state
    }
}

export default authReducer