import * as actionTypes from 'store/actions/actionTypes'

const delay = (time = 1500) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

 const submitAuth = (stat) => {
     return {
         type: actionTypes.AUTH,
         stat
     }
 }

 const handleLoading = (stat) => {
     return {
         type: actionTypes.LOADING,
         stat
     }
 }

export const handleAuth = (stat) => {
    return async (dispatch) => {
        dispatch(handleLoading(true))
        await delay(2000)
        dispatch(handleLoading(false))
        dispatch(submitAuth(stat))
    }
}