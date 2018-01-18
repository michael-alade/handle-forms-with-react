import React from 'react'

const StepOne = (props) => {
  return (
    <div className="form-group">
      <div>
        <input id="a1" className="styled-checkbox" onChange={(val) => console.log(val, 'val')} type="checkbox" />
        <label htmlFor="a1">A1</label>
      </div>
      <div>
        <input id="a2" className="styled-checkbox" onChange={(val) => console.log(val, 'val')} type="checkbox" />
        <label htmlFor="a2">A2</label>
      </div>
    </div>
  )
}

export default StepOne
