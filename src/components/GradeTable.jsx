import React, {useState} from 'react'

const gradeTable = (props) => {

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

  const totalQPI = ((totalGradePoints)/(totalUnits)).toFixed(2)
   
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
                        <td >{item.courseNo}</td>
                        <td >{item.courseName}</td>
                        <td >{item.courseUnits}</td>
                        <td >{item.courseGrade}</td>
                    </tr>
                  
                    
              ))}
          <tr>
            <td>Total QPI</td>
            <td>{totalQPI}</td>
         </tr>

    </>
  )
}

export default gradeTable