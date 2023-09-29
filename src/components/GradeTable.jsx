import React from 'react'

const gradeTable = (props) => {

  let totalQPI;

  const gradeEquivalent = {
    'A': 4,
    'B+': 3.5,
    'B': 3, 
    'C+':2.5,
    'C': 2,
    'D': 1,
    'F': 0
  }

  const totalGradePoints =  props.items.reduce((total, data) => {
    return total + (data.courseUnits * gradeEquivalent[data.courseGrade])
  } , 0)

  const totalUnits =  props.items.reduce((total, data) => {
    return total + Number(data.courseUnits)
  }, 0)

  totalQPI = (totalGradePoints / totalUnits).toFixed(2);

  if (isNaN(totalQPI)) {
    totalQPI = 0; 
  } 

  
  
   
  return (
    <>
        {props.items
              .filter((item) => (
                props.query.toLowerCase() === '' ||
                item.courseNo.toLowerCase().includes(props.query) || 
                item.courseName.toLowerCase().includes(props.query) ||
                item.courseGrade.toLowerCase().includes(props.query) ||
                item.courseUnits.includes(props.query) 
                ))
              .map((item, index) => (
                    <tr key={item.id}>
                        {/* <th scope='row'>{index+1}</th> */}
                        <td className='border-2	border-solid border-white bg-[#2A2B2E] border-spacing-1 p-2 w-20' >{item.courseNo}</td>
                        <td className='border-2	border-solid border-white bg-[#2A2B2E] border-spacing-1 p-2 w-20'>{item.courseName}</td>
                        <td className='border-2	border-solid border-white bg-[#2A2B2E] border-spacing-1 p-2 w-20'>{item.courseUnits}</td>
                        <td className='border-2	border-solid border-white bg-[#2A2B2E] border-spacing-1 p-2 w-20'>{item.courseGrade}</td>
                    </tr>
                  
                    
              ))}
          <tr>
            <td></td>
            <td></td>
            <td className='border-2	border-solid border-white text-[#2A2B2E] bg-white font-bold border-spacing-1 p-2 w-20'>Total QPI</td>
            <td className='border-2	brder-solid border-white text-[#2A2B2E] bg-white font-bold border-spacing-1 p-2 w-20'>{totalQPI}</td>
         </tr>

    </>
  )
}

export default gradeTable