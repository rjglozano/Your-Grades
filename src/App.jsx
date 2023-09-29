
import './App.css';
import GradeAddForm from './components/GradeAddForm';
import GradeSearchBox from './components/GradeSearchBox';
import GradeTable from './components/GradeTable';
import GradeTableHeader from './components/GradeTableHeader';
import { useState } from 'react';

function App() {

  const [txtValue, setTxtValue] = useState("");
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    courseNo: "",
    courseName: "",
    courseUnits: 0,
    courseGrade: "",
  });

  

  const handleForm =(e) => setForm({...form, [e.target.id]: e.target.value})

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, {id: data.length + 1, courseNo: form.courseNo, courseName: form.courseName, courseUnits: form.courseUnits, courseGrade: form.courseGrade}])

  };


  return (
    <div className="App">
      <GradeSearchBox value={txtValue} onChange={(e)=> {setTxtValue(e.target.value)}}/>
      <GradeAddForm form={form} onChange={handleForm} handleSubmit={handleSubmit} /> 
      <table>
        <thead>
          <GradeTableHeader />
        </thead>
        <tbody>
          <GradeTable items={data} query={txtValue}/>
        </tbody> 
      </table>
     

    

    </div>
  );
}

export default App;
