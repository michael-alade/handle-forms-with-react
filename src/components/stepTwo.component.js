import React from 'react'

const StepTwo = ({ handleToggle, checkedToggle }) => {
  return (
    <div className="form-group">
      <div>
        <div className="switch">
          <input id="b1" checked={checkedToggle === 'B1'} onChange={(e) => handleToggle(e, 'B1')} type="checkbox" className="toggle toggle-btn-light" />
          <label htmlFor="b1" className="toggle-btn"></label>
        </div>
        <span>B1</span>
      </div>
      <div>
        <div className="switch">
          <input id="b2" checked={checkedToggle === 'B2'} onChange={(e) => handleToggle(e, 'B2')} type="checkbox" className="toggle toggle-btn-light" />
          <label htmlFor="b2" className="toggle-btn"></label>
        </div>
        <span>B2</span>
      </div>
    </div> 
  )
}

export default StepTwo
