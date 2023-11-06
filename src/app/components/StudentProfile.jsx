import dayjs from 'dayjs';
import Buttons from './Buttons';

export function formatDate(dateString, format = 'YYYY-MM-DD') {
    const date = dayjs(dateString);
    if (!date.isValid()) {
      return '';
    }
  
    return date.format(format);
  }


function StudentProfile({ ...student }) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div key={student.id} className="flex flex-col items-center p-4 bg-white shadow-md rounded-md w-72">
        <h1 className="text-2xl text-slate-800 font-bold">Name</h1>
        <h2 className="text-2xl text-slate-600 pb-4">{student.name}</h2>
        <h1 className="text-2xl text-slate-800 font-bold">Surname</h1>
        <h2 className="text-2xl text-slate-600 pb-4">{student.surname}</h2>
        <h1 className="text-2xl text-slate-800 font-bold">Birthdate</h1>
        <h3 className="text-2xl text-slate-600 pb-4">{formatDate(student.birthdate)}</h3>
        <h1 className="text-2xl text-slate-800 font-bold">Age</h1>
        <h3 className="text-2xl text-slate-600 pb-4">{student.age}</h3>
        <Buttons studentId={student.id}></Buttons>
      </div>
      </div>
    );
  }
  
  export default StudentProfile;