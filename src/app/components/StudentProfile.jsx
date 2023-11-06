import React, { useState } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';

const StudentProfile = ({ student }) => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const toggleMoreDetails = () => {
    setShowMoreDetails(!showMoreDetails);
  };

  if (!student) {
    return null;
  }

  const { id, name, surname, birthdate, age, address, phone, email } = student;

  const formattedBirthdate = formatDate(birthdate);

  return (
    <div className="profile-student-card">
      <div className="profile-student-header">
        <h2>Student Profile</h2>
        <p>Student ID: {id}</p>
      </div>

      <div className="profile-student-info">
        <div className="info-row">
          <label>Name:</label>
          <span>{name}</span>
        </div>

        <div className="info-row">
          <label>Surname:</label>
          <span>{surname}</span>
        </div>

        <div className="info-row">
          <label>Birthdate:</label>
          <span>{formattedBirthdate}</span>
        </div>

        <div className="info-row">
          <label>Age:</label>
          <span>{age}</span>
        </div>

        {showMoreDetails && (
          <>
            <div className="info-row">
              <label>Address:</label>
              <span>{address}</span>
            </div>

            <div className="info-row">
              <label>Phone:</label>
              <span>{phone}</span>
            </div>

            <div className="info-row">
              <label>Email:</label>
              <span>{email}</span>
            </div>
          </>
        )}

        <button onClick={toggleMoreDetails}>
          {showMoreDetails ? 'Hide Details' : 'Show More Details'}
        </button>
      </div>
    </div>
  );
};

export default StudentProfile;

function formatDate(dateString, format = 'YYYY-MM-DD') {
  const date = dayjs(dateString);
  if (!date.isValid()) {
    return '';
  }

  return date.format(format);
}
