import React from 'react'

const StepThree = ({ handleTextChange, inputField, handleTextCheck, loadingState }) => {
  return (
    <div className="form-group">
      <div className="input-container">
        <input onChange={handleTextChange} value={inputField} placeholder="Type a value" type="text"/>
        <button onClick={() => handleTextCheck()}>
          { loadingState.state === 'check' && loadingState.show ? 'Checking..' : 'Check' }
        </button>
      </div>
    </div>
  )
}

export default StepThree
