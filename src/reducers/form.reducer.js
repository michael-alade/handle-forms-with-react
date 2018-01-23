import initialState from '../initialState'

const formReducer = (state = initialState, action) => {
  const payload = action.payload

  switch (action.type) {
    case 'SET_FORM_STATE':
      const { key, value, stepsOpened } = payload
      const custom = {}
      custom.formData = Object.assign({}, state.formData, {
        [key]: value
      })
      if (stepsOpened) {
        custom.stepsOpened = stepsOpened
      }
      return Object.assign({}, state, custom)
    case 'HANDLE_NOTIFICATION':
      return Object.assign({}, state, {
        notification: payload
      })
    case 'CLEAR_NOTIFICATION':
      return Object.assign({}, state, {
        notification: payload
      })
    case 'LOADING_STATE':
      return Object.assign({}, state, {
        loadingState: payload
      })
    default:
      return state
  }
}

export default formReducer
