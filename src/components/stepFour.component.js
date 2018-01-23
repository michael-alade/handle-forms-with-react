import React from 'react'

const StepFour = ({ selected, handleSelect }) => {
  return (
    <div className="form-group">
      <div>
        <select onChange={handleSelect} className="select-box" value={selected}>
          <option value=""></option>
          <option value="C1">C1</option>
          <option value="C2">C2</option>
          <option value="C3">C3</option>
        </select>
      </div>
    </div>
  )
}

export default StepFour
