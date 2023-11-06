'use client'
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import {useRouter} from 'next/navigation';
import { useParams } from 'next/navigation';

export function formatDate(dateString, format = 'YYYY-MM-DD') {
  const date = dayjs(dateString);
  if (!date.isValid()) {
    return '';
  }

  return date.format(format);
}

const StudentForm = () => {
    const [student,setStudent] = useState({
      name: '',
      surname: '',
      birthdate: '',
    });
    const form = useRef(null);
    const router = useRouter();
    const params = useParams();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setStudent({ ...student, [name]: value });
    };

    useEffect(() => {
      if(params.id){
        axios.get(`http://localhost:3000/api/students/${params.id}`)
          .then(res => {
            console.log(res)
            setStudent({
              name: res.data[0].name,
              surname:  res.data[0].surname,
              birthdate:formatDate(res.data[0].birthdate)
            })
          })
      }
    }, [])
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!params.id){
      const res = await axios.post('http://localhost:3000/api/students', student);
      
      } else {
        const res = await axios.put('http://localhost:3000/api/students/' + params.id, student);
      }

      form.current.reset(); 
      router.refresh();
      router.push('/students'); 
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-4 bg-white shadow-md rounded-md text-center">
        <h2 className="text-2xl font-bold text-gray-800">Student Form</h2>

        <form className="flex flex-col mt-4" onSubmit={handleSubmit} ref={form}>
          <div className="mb-4">
            <label className="text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-2 text-gray-700 border border-gray-300 rounded focus:outline-none"
              type="text"
              id="name"
              name="name"
              value={student.name}
              placeholder="Name"
              onChange={handleChange}
              autoFocus
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-700" htmlFor="surname">
              Surname
            </label>
            <input
              className="w-full p-2 border text-gray-700 border-gray-300 rounded focus:outline-none"
              type="text"
              id="surname"
              name="surname"
              placeholder="Surname"
              value={student.surname}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-700" htmlFor="birthdate">
              Birthdate
            </label>
            <input
              className="w-full p-2 border text-gray-700 border-gray-300 rounded focus:outline-none"
              type="date"
              id="birthdate"
              name="birthdate"
              placeholder="Birthdate"
              value={student.birthdate}
              onChange={handleChange}
            />
          </div>

          <button
            className="w-full py-2 px-4 bg-blue-500 text-white rounded font-bold hover:bg-blue-700"
            type="submit"
          >
            {params.id ? "Update student" : "Add student"}
          </button>
        </form>
      </div>
    </div>
  );
};  
  
  export default StudentForm;