import React, { Component } from 'react'
import StepOne from '../components/stepOne.component'
import StepTwo from '../components/stepTwo.component'
import StepThree from '../components/stepThree.component'
import StepFour from '../components/stepFour.component'

class FormContainer extends Component {
  state = {
    stepsOpened: [1],
    formData: {
      a: [],
      b: null,
      text: '',
      c: ''
    }
  }

  handleToggle = (e, checkedToggle) => {
    const { formData } = this.state

    return this.setState({
      formData: Object.assign({}, formData, {
        b: checkedToggle
      })
    }, () => {
      this.handleSteps(2)
    })
  }

  handleSteps = (step) => {
    let { formData } = this.state
    switch (step) {
      case 1:
        if (!formData.a.length) {
          return this.setState({ stepsOpened: [1] })
        }
        return this.setState({ stepsOpened: [1, 2] })
      case 2:
        if (!formData.b) {
          return this.setState({ stepsOpened: [1, 2] })
        }
        return this.setState({ stepsOpened: [1, 2, 3] })
      case 3:
        return this.setState({ stepsOpened: [1, 2, 3, 4] })
      case 4:
        if (formData.c.length) {
          return this.setState({ stepsOpened: [1, 2, 3, 4, 5] })
        }
        return this.setState({ stepsOpened: [1, 2, 3, 4] })
      default:
        break;
    }
  }

  handleCheckboxSelect = (e, selected) => {
    let { formData } = this.state
    if (formData.a.includes(selected)) {
      formData.a = formData.a.filter(val => val !== selected)
    } else {
      formData.a.push(selected)
    }

    return this.setState({
      formData: Object.assign({}, formData, { a: formData.a })
    }, () => {
      this.handleSteps(1)
    })
  }

  handleTextCheck = () => {
    this.handleSteps(3)
  }

  handleTextChange = (e) => {
    let { formData } = this.state
    return this.setState({
      formData: Object.assign({}, formData, {
        text: e.target.value
      })
    })
  }

  handleSelect = (e) => {
    let { formData } = this.state
    return this.setState({
      formData: Object.assign({}, formData, {
        c: e.target.value
      })
    }, () => {
      this.handleSteps(4)
    })
  }

  render () {
    let { formData, stepsOpened } = this.state
    return (
      <div id="form-container">
        <div className="form-box">
          {
            stepsOpened.includes(1) &&
            <StepOne
              handleCheckboxSelect={this.handleCheckboxSelect}
            />
          }
          {
            stepsOpened.includes(2) &&
            <StepTwo
              checkedToggle={formData.b}
              handleToggle={this.handleToggle}
            />
          }
          {
            stepsOpened.includes(3) &&
            <StepThree
              inputField={formData.text}
              handleTextChange={this.handleTextChange}
              handleTextCheck={this.handleTextCheck}
            />
          }
          {
            stepsOpened.includes(4) &&
            <StepFour
              selected={formData.c}
              handleSelect={this.handleSelect}
            />
          }
          {
            stepsOpened.includes(5) &&
            <div className="submit-box">
              <button type="submit">Submit</button>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default FormContainer
