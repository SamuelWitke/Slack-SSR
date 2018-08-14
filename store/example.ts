export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
}

class State{
  public count : number
  constructor() {
    this.count = 0;
  }
}

// REDUCERS
export const exampleReducer = (state = new State(), action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      })
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: new State().count
      })
    default: return state
  }
}

// ACTIONS
export const incrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.INCREMENT })
}

export const decrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.DECREMENT })
}

export const resetCount = () => dispatch => {
  return dispatch({ type: actionTypes.RESET })
}

