import axios from 'axios'



async function loadStudent(studentId){
    const { data } = await axios.get("http://localhost:3000/api/students/"+ studentId);
    console.log(data[0])
    return data[0]
  }

  import React from 'react'
import StudentProfile from '../../components/StudentProfile';
  
  async function StudentPage({params}) {
    const student = await loadStudent(params.id);

    return (
      <div className="flex justify-center items-center h-full">
        <StudentProfile {...student}></StudentProfile>
      </div>
    )
  }
  
  export default StudentPage