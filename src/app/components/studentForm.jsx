'use client'
import React, { useState } from 'react';

const StudentForm = () => {
    const [form,setForm] = useState({
      name: '',
      surname: '',
      birthdate: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform form submission or processing here
      console.log('Form submitted successfully', form);
  
      return; // Added return statement
    };
  
    return (
      <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-gray-800">Student Form</h2>
  
        <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-gray-700" htmlFor="name">Name</label>
            <input className="w-full p-2 border border-gray-300 rounded focus:outline-none" type="text" id="name" name="name" value={form.name} onChange={handleChange} />
          </div>
  
          <div className="mb-4">
            <label className="text-gray-700" htmlFor="surname">Surname</label>
            <input className="w-full p-2 border border-gray-300 rounded focus:outline-none" type="text" id="surname" name="surname" value={form.surname} onChange={handleChange} />
          </div>
  
          <div className="mb-4">
            <label className="text-gray-700" htmlFor="birthdate">Birthdate</label>
            <input className="w-full p-2 border border-gray-300 rounded focus:outline-none" type="date" id="birthdate" name="birthdate" value={form.birthdate} onChange={handleChange} />
          </div>
  
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded font-bold hover:bg-blue-700" type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default StudentForm;