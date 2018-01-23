import initialState from '../initialState'

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FORM_STATE':
      const { key, value, stepsOpened } = action.payload
      const custom = {}
      custom.formData = Object.assign({}, state.formData, {
        [key]: value
      })
      if (stepsOpened) {
        custom.stepsOpened = stepsOpened
      }
      return Object.assign({}, state, custom)
    case 'HANDLE_ERROR':
      const { error } = action.payload 
      return Object.assign({}, state, {
        error
      })
    case 'CLEAR_ERROR':
      console.log(error, 'err')
      // const { error } = action.payload
      return Object.assign({}, state, {
        error
      })
    default:
      return state
  }
}

export default formReducer
