const initialState = {
  stepsDone: [],
  formData: {
    
  }
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return action.state
    default:
      return state
  }
}

export default formReducer
