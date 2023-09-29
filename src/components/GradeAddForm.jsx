import React from 'react'

const GradeAddForm = ({form, onChange, handleSubmit}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='courseNo'>Course No</label>
                    <input type="text" name="courseNo" id='courseNo' value={form.courseNo} onChange={onChange} required/>
                </div>
                <div>
                    <label htmlFor='courseName'>Course Name</label>
                    <input type="text" name="courseName" id='courseName' value={form.courseName} onChange={onChange} required/>
                </div>
                <div>
                    <label htmlFor='courseUnits'>Units</label>
                    <input type="number" name="courseUnits" id='courseUnits' value={form.courseUnits} onChange={onChange} required/>
                </div>
                <div>
                    <label htmlFor='courseGrade'>Grade</label>
                    <div>
                        <input type="radio" name="courseGrade" id='courseGrade' value="A" onChange={onChange}/>
                        <label htmlFor='courseGrade'>A</label>
                    </div>
                    <div>
                        <input type="radio" name="courseGrade" id='courseGrade' value="B+" onChange={onChange}/>
                        <label htmlFor='courseGrade'>B+</label>
                    </div>
                    <div>
                        <input type="radio" name="courseGrade" id='courseGrade' value="B" onChange={onChange} />
                        <label htmlFor='courseGrade'>B</label>
                    </div>
                    <div>
                        <input type="radio" name="courseGrade" id='courseGrade' value="C+" onChange={onChange} />
                        <label htmlFor='courseGrade'>C+</label>
                    </div>
                    <div>
                        <input type="radio" name="courseGrade" id='courseGrade' value="C" onChange={onChange} />
                        <label htmlFor='courseGrade'>C</label>
                    </div>
                    <div>
                        <input type="radio" name="courseGrade" id='courseGrade' value="D" onChange={onChange} />
                        <label htmlFor='courseGrade'>D</label>
                    </div>
                    <div>
                        <input type="radio" name="courseGrade" id='courseGrade' value="F" onChange={onChange}  />
                        <label htmlFor='courseGrade'>F</label>
                    </div>

                    <button type="submit">Submit</button>
                    
                </div>
            </form>

        </div>
    )
}

export default GradeAddForm