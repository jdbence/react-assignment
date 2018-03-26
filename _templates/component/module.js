import { createAction, handleActions } from 'redux-actions'

// Constants
const INCREMENT = 'INCREMENT@<%= name %>';
const RESET_COMPLETE = 'RESET_COMPLETE@<%= name %>';

// Actions
export const increment = createAction(INCREMENT);
const resetComplete = createAction(RESET_COMPLETE);

// Async Actions
export const reset = () => {
  return dispatch => Promise.resolve(0)
    .then(response => dispatch(resetComplete(response)))
}

const initialState = {
  count: 0
}

const reducer = handleActions(
  {
    [INCREMENT]: (state, {payload}) => ({...state, count: state.count + 1}),
    [RESET_COMPLETE]: (state, {payload}) => ({...state, count: payload}),
  },
  initialState
)

export default reducer