const handleSteps = (step, value) => {
  let stepsOpened = []
  switch (step) {
    case 1:
      if (value.length) {
        stepsOpened = [1, 2]
        return stepsOpened
      }
      stepsOpened = [1]
      return stepsOpened

    case 2:
      if (!value) {
        stepsOpened = [1, 2]
        return stepsOpened
      }
      stepsOpened = [1, 2, 3]
      return stepsOpened

    case 3:
      stepsOpened = [1, 2, 3, 4] 
      return stepsOpened

    case 4:
      if (value.length) {
        stepsOpened = [1, 2, 3, 4, 5]
        return stepsOpened
      }
      stepsOpened = [1, 2, 3, 4]
      return stepsOpened

    default:
      return null
  }
}

export const handleError = (error) => {
  return {
    type: 'HANDLE_ERROR',
    payload: {
      error
    }
  }
}

export const clearError = () => {
  return {
    type: 'CLEAR_ERROR',
    payload: {
      error: null
    }
  }
}

export const handleFormState = (key, value, step) => {
  const stepsOpened = handleSteps(step, value)
  return {
    type: 'SET_FORM_STATE',
    payload: {
      key,
      value,
      stepsOpened
    }
  }
}
