'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

function MessageBox() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-4 bg-white shadow-md rounded-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Operation Succeeded!</h2>
        <p className="text-slate-600 text-lg mb-6">What would you like to do now?</p>
        <div className="space-x-4">
        <button
            className="text-white bg-gray-500 hover:bg-gray-700 py-2 px-4 rounded transition duration-300"
            onClick={() => {
              router.push(`/students/`);
            }}
          >
            Go to the List
          </button>
          <button
            className="text-white bg-green-500 hover:bg-green-700 py-2 px-4 rounded transition duration-300"
            onClick={() => {
              router.push(`/new`);
            }}
          >
            Add New Student
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default MessageBox;
