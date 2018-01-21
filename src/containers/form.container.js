import React, { Component } from 'react'
import { connect } from 'react-redux'
import StepOne from '../components/stepOne.component'
import StepTwo from '../components/stepTwo.component'
import StepThree from '../components/stepThree.component'
import StepFour from '../components/stepFour.component'
import ErrorBox from '../components/errorBox.component'
import { checkIt, submitIt } from '../api'
import * as actions from '../actions/form.action'

class FormContainer extends Component {
  state = {
    textField: ''
  }

  handleToggle = (e, checkedToggle) => {
    this.props.handleFormState('b', checkedToggle, 2)
    return
  }

  handleCheckboxSelect = (e, selected) => {
    let { formData } = this.props
    if (formData.a.includes(selected)) {
      formData.a = formData.a.filter(val => val !== selected)
    } else {
      formData.a.push(selected)
    }

    this.props.handleFormState('a', formData.a, 1)
    return
  }

  handleTextCheck = () => {
    const { textField } = this.state
    return checkIt(textField).then(() => {
      this.props.clearError()
      return this.props.handleFormState('text', textField, 3)
    }).catch(error => {
      return this.props.handleError(error.message)
    })
  }

  handleTextChange = (e) => {
    return this.setState({ textField: e.target.value })
  }

  handleSelect = (e) => {
    this.props.handleFormState('c', e.target.value, 4)
    return
  }

  handleSubmit = () => {
    const { formData } = this.props
    return submitIt(formData).then(res => {
      this.props.clearError()
      return res
    }).catch(error => {
      return this.props.handleError(error.message)
    })
  }

  render () {
    let { formData, stepsOpened, error } = this.props
    return (
      <div id="form-container">
        <div className="form-box">
          {
            error &&
            <ErrorBox
              error={error}
            />
          }
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
              inputField={this.state.textField}
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
              <button onClick={() => this.handleSubmit()} type="submit">Submit</button>
            </div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state.formReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () => dispatch(actions.clearError()),
    handleFormState: (key, value, step) => dispatch(actions.handleFormState(key, value, step)),
    handleError: (error) => dispatch(actions.handleError(error))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)
