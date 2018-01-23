import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions/form.action'
import initialState from '../initialState'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
let store
describe('Form redux actions', () => {

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should dispatch handleFormState for step 1', () => {
    const key = 'a', value = ['A1'], step = 1
    store.dispatch(actions.handleFormState(key, value, step))
    const expectedPayload = {
      type: 'SET_FORM_STATE',
      payload: {
        key,
        value,
        stepsOpened: [1, 2]
      }
    }
    return expect(store.getActions()).toEqual([expectedPayload])
  })

  it('should dispatch handleNotification', () => {
    const type = 'success', message = 'Successfully sent.'
    store.dispatch(actions.handleNotification(type, message))
    const expectedPayload = {
      type: 'HANDLE_NOTIFICATION',
      payload: {
        show: true,
        type,
        message
      }
    }
    return expect(store.getActions()).toEqual([expectedPayload])
  })

  it('should dispatch clearNotification to clear notification state', () => {
    store.dispatch(actions.clearNotification())
    const expectedPayload = {
      type: 'CLEAR_NOTIFICATION',
      payload: {
        show: false,
        type: null,
        message: null
      }
    }
    return expect(store.getActions()).toEqual([expectedPayload])
  })

  it('should dispatch loadingState', () => {
    const state = 'check', show = true
    store.dispatch(actions.loadingState(state, show))
    const expectedPayload = {
      type: 'LOADING_STATE',
      payload: {
        state,
        show
      }
    }

    return expect(store.getActions()).toEqual([expectedPayload])
  })
})
