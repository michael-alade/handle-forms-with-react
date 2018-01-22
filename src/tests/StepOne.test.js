import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import sinon from 'sinon'
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16'
import FormContainer from '../containers/form.container'
import StepOne from '../components/stepOne.component'

Enzyme.configure({ adapter: new Adapter() })

describe('STEPONE COMPONENT', () => {

  it('should render step one component', () => {
    let wrapper = shallow(<StepOne />)
    expect(wrapper.length).toEqual(1)
  })

  it ('should handle checkbox change', () => {
    const handleCheckboxSelect = sinon.spy()
    const wrapper = shallow(<StepOne handleCheckboxSelect={handleCheckboxSelect} />)
    wrapper.find('input#a1').simulate('change')

    expect(handleCheckboxSelect.calledOnce).toEqual(true)
  })
})