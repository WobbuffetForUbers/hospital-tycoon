import React from 'react';
    import './HospitalLayout.css';

    function HospitalLayout({ patients, onSelectRoom }) {
      return (
        <div className="hospital-layout">
          {patients.map((patient, index) => (
            <div key={index} className="room" onClick={() => onSelectRoom(patient)}>
              <strong>Room {index + 1}</strong>
              <p>{patient.name}</p>
              <p>Personality: {patient.personality}</p>
            </div>
          ))}
        </div>
      );
    }

    export default HospitalLayout;
