import React from 'react'

const GradeSearchBox = ({value, onChange}) => {
  return (
    <div>
        <input type="text" placeholder="Search here..." value={value} onChange={onChange} />
    </div>
  )
}

export default GradeSearchBox