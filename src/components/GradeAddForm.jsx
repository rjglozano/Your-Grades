import React from 'react'

const GradeAddForm = ({form, onChange, handleSubmit}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col text-xl mb-2'>
                    <label className='text-left font-semibold' htmlFor='courseNo'>Course No</label>
                    <input className='placeholder-gray-500::placeholder text-[#2A2B2E] p-2 text-[1rem] rounded-[10px] mt-2' placeholder='Enter Course Number...' type="text" name="courseNo" id='courseNo' value={form.courseNo} onChange={onChange} required/>
                </div>
                <div className='flex flex-col text-xl my-2'>
                    <label className='text-left font-semibold' htmlFor='courseName'>Course Name</label>
                    <input className='placeholder-gray-500::placeholder text-[#2A2B2E] p-2 text-[1rem] rounded-[10px] mt-2' placeholder='Enter Course Name...' type="text" name="courseName" id='courseName' value={form.courseName} onChange={onChange} required/>
                </div>
                <div className='flex flex-col text-xl my-2'>
                    <label className='text-left font-semibold' htmlFor='courseUnits'>Units</label>
                    <input className='placeholder-gray-500::placeholder text-[#2A2B2E] p-2 text-[1rem] rounded-[10px] mt-2' type="number" name="courseUnits" id='courseUnits' value={form.courseUnits} onChange={onChange} required/>
                </div>
                <div className='flex flex-col text-xl my-2'>
                    <label className='text-left font-semibold' htmlFor='courseGrade'>Grade</label>
                    <div className='grid grid-cols-2'>
                        <div className='flex gap-2'>
                            <input className='accent-[#D4AF37]' type="radio" name="courseGrade" id='courseGrade' value="A" onChange={onChange}/>
                            <label htmlFor='courseGrade'>A</label>
                        </div>
                        <div className='flex gap-2'>
                            <input className='accent-[#D4AF37]' type="radio" name="courseGrade" id='courseGrade' value="B+" onChange={onChange}/>
                            <label htmlFor='courseGrade'>B+</label>
                        </div>
                        <div className='flex gap-2'>
                            <input className='accent-[#D4AF37]' type="radio" name="courseGrade" id='courseGrade' value="B" onChange={onChange} />
                            <label htmlFor='courseGrade'>B</label>
                        </div>
                        <div className='flex gap-2'>
                            <input className='accent-[#D4AF37]' type="radio" name="courseGrade" id='courseGrade' value="C+" onChange={onChange} />
                            <label htmlFor='courseGrade'>C+</label>
                        </div>
                        <div className='flex gap-2'>
                            <input className='accent-[#D4AF37]' type="radio" name="courseGrade" id='courseGrade' value="C" onChange={onChange} />
                            <label htmlFor='courseGrade'>C</label>
                        </div>
                        <div className='flex gap-2'>
                            <input className='accent-[#D4AF37]' type="radio" name="courseGrade" id='courseGrade' value="D" onChange={onChange} />
                            <label htmlFor='courseGrade'>D</label>
                        </div>
                        <div className='flex gap-2'>
                            <input className='accent-[#D4AF37]' type="radio" name="courseGrade" id='courseGrade' value="F" onChange={onChange}  />
                            <label htmlFor='courseGrade'>F</label>
                        </div>
                    </div>   
                    <button className='bg-[#D4AF37] hover:bg-[#D4AF37] rounded-[10px] hover:opacity-80 text-[#2A2B2E] font-bold p-1 mt-3' type="submit">Submit</button>
                
                </div>
            </form>

        </div>
    )
}

export default GradeAddForm