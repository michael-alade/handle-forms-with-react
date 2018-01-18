import React, { Component } from 'react'
import StepOne from '../components/stepOne.component'
import StepTwo from '../components/stepTwo.component'
import StepThree from '../components/stepThree.component'
import StepFour from '../components/stepFour.component'

class FormContainer extends Component {
  render () {
    return (
      <div id="form-container">
        <div className="form-box">
          <StepOne />
          <StepTwo />
          <StepThree />
          <StepFour />
          <div className="submit-box">
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default FormContainer
