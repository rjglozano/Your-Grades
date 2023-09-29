import React from 'react'

const GradeTableHeader = () => {
  return (
    <>
       <tr className='max-w-full bg-[#D4AF37] text-[#2A2B2E]' >
          <th className='border-2	border-solid border-white border-spacing-1 p-2 w-20'>Course No.</th>
          <th className='border-2	border-solid border-white border-spacing-1 p-2 w-20'>Course Name</th>
          <th className='border-2	border-solid border-white border-spacing-1 p-2 w-20'>Units</th>
          <th className='border-2	border-solid border-white border-spacing-1 p-2 w-20'>Grade</th>
        </tr>
    </>
   
  )
}

export default GradeTableHeader