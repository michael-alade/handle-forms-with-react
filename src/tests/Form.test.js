import React from 'react'
import { Provider } from 'react-redux'
import Enzyme, { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16'
import FormContainer from '../containers/form.container'
import StepOne from '../components/stepOne.component'
import StepTwo from '../components/stepTwo.component'
import formReducer from '../reducers/form.reducer'
import initialState from '../initialState'

const mockStore = configureStore()
let store = mockStore(initialState)
let wrapper

Enzyme.configure({ adapter: new Adapter() })

describe('FORM COMPONENT', () => {

  beforeEach(() => {
    wrapper = mount(<Provider store={store}><FormContainer /></Provider>)
  })

  it('should render', () => {
    return expect(wrapper.length).toEqual(1)
  })

  it('should render first form item <StepOne/>', () => {
    const stepOne = wrapper.find(StepOne)
    return expect(stepOne.length).toEqual(1)
  })

  it('should return value to redux state when checkbox is selected in first step', () => {
    const stepOne = wrapper.find(StepOne)
    const checkboxOne = stepOne.find('input#a1').simulate('change')
    const checkboxTwo = stepOne.find('input#a2').simulate('change')
    const reduxState = store.getState()

    expect(reduxState.formData.a.includes('A1')).toEqual(true)
    expect(reduxState.formData.a.includes('A2')).toEqual(true)
  })
})
