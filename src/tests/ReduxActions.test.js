import configureStore from 'redux-mock-store'
import * as actions from '../actions/form.action'
import initialState from '../initialState'

const mockStore = configureStore()
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
    expect(store.getActions()).toEqual([expectedPayload])
  })

  it ('should dispatch handleError', () => {
    const error = 'Some error'
    store.dispatch(actions.handleError(error))
    const expectedPayload = {
      type: 'HANDLE_ERROR',
      payload: {
        error
      }
    }
    expect(store.getActions()).toEqual([expectedPayload])
  })

  it ('should dispatch clearError to clear error in state', () => {
    store.dispatch(actions.clearError())
    const expectedPayload = {
      type: 'CLEAR_ERROR',
      payload: {
        error: null
      }
    }
    expect(store.getActions()).toEqual([expectedPayload])
  })
})
