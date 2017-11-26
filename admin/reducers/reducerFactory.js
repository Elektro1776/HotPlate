/* eslint func-names: ["error", "as-needed"] */
function hasOwnProp(handlers, prop) {
  return Object.prototype.hasOwnProperty.call(handlers, prop);
}
function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export default createReducer;
