import { initState, State } from './state';

export const actionTypes = {
  USER_SIGN_ON: 'USER_SIGN_ON',
  USER_SIGN_OFF: 'USER_SIGN_OFF',
}

// REDUCERS
export const userReducer = (state : State = initState , action) => {
  switch (action.type) {
    case actionTypes.USER_SIGN_ON:
      return Object.assign({}, state, {
        user: action.payload 
      })
    case actionTypes.USER_SIGN_OFF:
      return Object.assign({}, state, {
        user: initState.user 
      })
    default: return state
  }
}

// ACTIONS

export const userSignOn = (user) => dispatch => {
  return dispatch({ type: actionTypes.USER_SIGN_ON, payload: user})
}

export const userSignOff = () => dispatch => {
  return dispatch({ type: actionTypes.USER_SIGN_OFF })
}