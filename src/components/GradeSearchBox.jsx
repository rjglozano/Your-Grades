import React from 'react'

const GradeSearchBox = ({value, onChange}) => {
  return (
    <div>
        <input className='placeholder-gray-500::placeholder text-[#2A2B2E] p-2 rounded-[10px]' type="text" placeholder="Search here..." value={value} onChange={onChange} />

    </div>
  )
}

export default GradeSearchBox