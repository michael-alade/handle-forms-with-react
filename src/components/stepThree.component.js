import React from 'react'

const StepThree = ({ handleTextChange, inputField, handleTextCheck }) => {
  return (
    <div className="form-group">
      <div className="input-container">
        <input onChange={handleTextChange} value={inputField} placeholder="Type a value" type="text"/>
        <button onClick={() => handleTextCheck()}>Check</button>
      </div>
    </div>
  )
}

export default StepThree
