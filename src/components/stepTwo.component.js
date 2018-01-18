import React from 'react'

const StepTwo = () => {
  return (
    <div className="form-group">
      <div>
        <div className="switch">
          <input id="b1" onChange={(e) => console.log(e)} type="checkbox" className="toggle toggle-btn-light" />
          <label htmlFor="b1" className="toggle-btn"></label>
        </div>
        <span>B1</span>
      </div>
      <div>
        <div className="switch">
          <input id="b2" onChange={(e) => console.log(e)} type="checkbox" className="toggle toggle-btn-light" />
          <label htmlFor="b2" className="toggle-btn"></label>
        </div>
        <span>B2</span>
      </div>
    </div> 
  )
}

export default StepTwo
