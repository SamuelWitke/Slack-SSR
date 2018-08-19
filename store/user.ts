export const actionTypes = {
  USER_SIGN_ON: 'USER_SIGN_ON',
  USER_SIGN_UP: 'USER_SIGN_UP',
  USER_SIGN_OFF: 'USER_SIGN_OFF',
}

class UserState {
  public username: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  constructor(user?: any) {    
    this.username = user && user.username || "";
    this.firstName = user && user.firstName || "";
    this.lastName = user && user.lastName || "";
    this.email= user && user.email|| "";
}   
}

// REDUCERS
export const userReducer = (state = new UserState(), action) => {
  switch (action.type) {
    case actionTypes.USER_SIGN_UP:
      return new UserState(action.payload)
    case actionTypes.USER_SIGN_OFF:
      return new UserState() 
    default: return state
  }
}

// ACTIONS
export const userSignOn = (user) => dispatch => {
  return dispatch({ type: actionTypes.USER_SIGN_UP, payload: user})
}

export const userSignUp = (user) => dispatch => {
  return dispatch({ type: actionTypes.USER_SIGN_UP, payload: user})
}

export const userSignOff = () => dispatch => {
  return dispatch({ type: actionTypes.USER_SIGN_OFF })
}