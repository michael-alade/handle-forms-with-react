import { checkIt, submitIt } from '../api'

/**
 * HandleSteps
 * @description Function to handle steps in progressive form
 * @param {Number} step - Current step e.g 1 or 2
 * @param {*} formItemValue - Current step input value for performing
 * conditional checks
 * @returns {Array}
 */
const handleSteps = (step, formItemValue) => {
  let stepsOpened = []
  switch (step) {
    case 1:
      if (formItemValue.length) {
        stepsOpened = [1, 2]
        return stepsOpened
      }
      stepsOpened = [1]
      return stepsOpened

    case 2:
      if (!formItemValue) {
        stepsOpened = [1, 2]
        return stepsOpened
      }
      stepsOpened = [1, 2, 3]
      return stepsOpened

    case 3:
      stepsOpened = [1, 2, 3, 4] 
      return stepsOpened

    case 4:
      if (formItemValue.length) {
        stepsOpened = [1, 2, 3, 4, 5]
        return stepsOpened
      }
      stepsOpened = [1, 2, 3, 4]
      return stepsOpened

    default:
      return null
  }
}

/**
 * LoadingState
 * @desc Function to show current loading whenever
 * an action is dispatched
 * @param {String} state - Current loading e.g `check` or `submit`
 * @param {Boolean} show - Status of state e.g true or false
 * @returns {Object}
 */
export const loadingState = (state, show) => {
  return {
    type: 'LOADING_STATE',
    payload: {
      state,
      show
    }
  }
}

/**
 * HandleNotification
 * @desc Set Notification in the store store
 * @param {String} type - Type of notification e.g `error`, `success`
 * @param {Boolean} message - Message to be displayed
 * @returns {Object}
 */
export const handleNotification = (type, message) => {
  return {
    type: 'HANDLE_NOTIFICATION',
    payload: {
      show: true,
      type,
      message
    }
  }
}

/**
 * ClearNotification
 * @desc Clear form notification state
 * @returns {Object}
 */
export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION',
    payload: {
      show: false,
      type: null,
      message: null
    }
  }
}

/**
 * CheckFormItem
 * @desc Function to check if item is valid
 * @param {String} item
 * @returns {Function}
 */
export const checkFormItem = (item) => {
  return dispatch => {
    dispatch(clearNotification())
    dispatch(loadingState('check', true))
    return checkIt(item)
      .then(() => {
        dispatch(loadingState('check', false))
        return dispatch(handleFormState('text', item, 3))
      })
      .catch(error => {
        dispatch(loadingState('check', false))
        return dispatch(handleNotification('error', error.message))
      })
  }
}

/**
 * SubmitForm
 * @desc Function to send form data to server through API
 * @param {*} formData - form data
 * @returns {Function}
 */
export const submitForm = (formData) => {
  return dispatch => {
    dispatch(clearNotification())
    dispatch(loadingState('submit', true))
    return submitIt(formData)
      .then(() => {
        dispatch(loadingState('submit', false))
        return dispatch(handleNotification('success', 'Form submitted successfully.'))
      })
      .catch(error => {
        dispatch(loadingState('submit', false))
        return dispatch(handleNotification('error', error.message))
      })
  }
}

/**
 * HandleFormState
 * @desc Function to handle for state based on key and value
 * @param {*} key - Dynamic Form state object key
 * @param {*} value - Form state object valu for key
 * @param {*} step - Current Step of form input
 * @returns {Object}
 */
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
