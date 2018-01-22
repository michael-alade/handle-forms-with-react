import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import sinon from 'sinon'
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16'
import FormContainer from '../containers/form.container'
import StepTwo from '../components/stepTwo.component'

Enzyme.configure({ adapter: new Adapter() })

describe('STEPTWO COMPONENT', () => {

  it('should render step two component', () => {
    const wrapper = shallow(<StepTwo />)
    expect(wrapper.length).toEqual(1)
  })

  it ('should render both toggle inactive by default', () => {
    const wrapper = shallow(<StepTwo checkedToggle={''} />)
    const toggleOne = wrapper.find('input#b1')
    const toggleTwo = wrapper.find('input#b2')
    expect(toggleOne.props().checked).toEqual(false)
    expect(toggleTwo.props().checked).toEqual(false)
  })

  it('should untoggle the other if one is toggled', () => {
    const wrapper = shallow(<StepTwo checkedToggle={'B2'} />)
    const toggleOne = wrapper.find('input#b1')
    const toggleTwo = wrapper.find('input#b2')
    expect(toggleOne.props().checked).toEqual(false)
    expect(toggleTwo.props().checked).toEqual(true)
  })

  it ('should handle change when toggle button is clicked', () => {
    const handleToggle = sinon.spy()
    const checkedToggle = ''
    const wrapper = shallow(
      <StepTwo
        handleToggle={handleToggle}
        checkedToggle={checkedToggle}
      />
    )
    wrapper.find('input#b1').simulate('change')
    expect(handleToggle.calledOnce).toEqual(true)
  })

})