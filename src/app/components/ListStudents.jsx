'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function formatDate(dateString, format = 'YYYY-MM-DD') {
  const date = dayjs(dateString);
  if (!date.isValid()) {
    return '';
  }

  return date.format(format);
}

const ListStudents = () => {
  const [students, setStudents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get('/api/students');
      const studentsData = await response.data;
      setStudents(studentsData);
    };

    fetchStudents();
  }, []);

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded h-full">
      <h2 className="text-2xl font-bold text-gray-800">List of Students</h2>

      <div className="mt-4" style={{ overflowX: 'auto' }}>
        <table className="w-full table-auto border-collapse border border-gray-300" style={{ height: '400px' }}>
          <thead>
            <tr className="bg-gray-200 border-b-2 border-gray-300">
              <th className="text-gray-700 font-bold py-2 px-4 text-center">Name</th>
              <th className="text-gray-700 font-bold py-2 px-4 text-center">Surname</th>
              <th className="text-gray-700 font-bold py-2 px-4 text-center">Birthdate</th>
              <th className="text-gray-700 font-bold py-2 px-4 text-center">Age</th>
              <th className="text-gray-700 font-bold py-2 px-4">
                <div className="flex justify-center">Actions</div>
              </th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b-2 border-gray-300">
                <td className="text-gray-600 py-2 px-4 text-center">{student.name}</td>
                <td className="text-gray-600 py-2 px-4 text-center">{student.surname}</td>
                <td className="text-gray-600 py-2 px-4 text-center">
                  {formatDate(student.birthdate)}
                </td>
                <td className="text-gray-600 py-2 px-4 text-center">{student.age}</td>
                <td className="flex justify-center py-2 px-4 items-center">
                  <button className="bg-blue-500 text-white rounded py-1 px-2 mr-2">
                    <Link href={`/students/edit/${student.id}`}>Update</Link>
                  </button>
                  <button className="bg-green-500 text-white rounded py-1 px-2 mr-2">
                    <Link href={`/students/${student.id}`}>See more</Link>
                  </button>
                  <button
                    className="bg-red-500 text-white rounded py-1 px-2"
                    onClick={async () => {
                      if (confirm("Please confirm that you want to delete this student:")) {
                        const res = await axios.delete(`/api/students/${student.id}`);
                        if (res.status === 200) {
                          router.push('/success');
                        }
                        else{alert("Operation failed, please try again")}
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-4">
        <button className="bg-gray-400 text-white rounded py-2 px-4 mr-16"
        onClick={() => {
              router.back();
            }}>Go back </button>
        <button className="bg-blue-500 text-white rounded py-2 px-4"><Link href={`/new`}>Add New Student</Link></button>
      </div>
    </div>
  );
};

export default ListStudents;
