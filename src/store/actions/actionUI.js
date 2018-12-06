import * as actionTypes from 'store/actions/actionTypes'

export const handleRoute = (route) => {
    return {
        type: actionTypes.ROUTE, 
        route: route
    }
}

export const handleError = (stat, message) => {
    return {
        type: actionTypes.ERROR_MANAGE, 
        stat, message
    }
}

export const modalManage = (stat, route) => {
    return {
        type: actionTypes.MODAL_MANAGE,
        stat,
        route
    }
}