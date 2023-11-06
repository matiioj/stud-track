'use client'
import React, { useRef, useState } from 'react';
import axios from 'axios';
import {useRouter} from 'next/navigation';

const StudentForm = () => {
    const [student,setStudent] = useState({
      name: '',
      surname: '',
      birthdate: '',
    });
    const form = useRef(null);
    const router = useRouter()
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setStudent({ ...student, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await axios.post('/api/students', student)
      form.current.reset(); 
      router.push('/students')
    };
  
    return (
      <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-gray-800">Student Form</h2>
  
        <form className="flex flex-col mt-4" onSubmit={handleSubmit} ref={form}>
          <div className="mb-4">
            <label className="text-gray-700" htmlFor="name">Name</label>
            <input className="w-full p-2 text-gray-700 border border-gray-300 rounded focus:outline-none" type="text" id="name" name="name" value={student.name} onChange={handleChange} autoFocus/>
          </div>
  
          <div className="mb-4">
            <label className="text-gray-700" htmlFor="surname">Surname</label>
            <input className="w-full p-2 border text-gray-700 border-gray-300 rounded focus:outline-none" type="text" id="surname" name="surname" value={student.surname} onChange={handleChange} />
          </div>
  
          <div className="mb-4">
            <label className="text-gray-700" htmlFor="birthdate">Birthdate</label>
            <input className="w-full p-2 border text-gray-700 border-gray-300 rounded focus:outline-none" type="date" id="birthdate" name="birthdate" value={student.birthdate} onChange={handleChange} />
          </div>
  
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded font-bold hover:bg-blue-700" type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default StudentForm;