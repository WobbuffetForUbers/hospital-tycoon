import React, { useState } from 'react';

    const initialPatients = [
      { id: 1, name: 'John Doe', condition: 'Flu', personality: 'Friendly' },
      { id: 2, name: 'Jane Smith', condition: 'Migraine', personality: 'Anxious' },
      // Add more patients as needed
    ];

    function PatientManager() {
      const [patients, setPatients] = useState(initialPatients);

      return (
        <div>
          <h2>Patients</h2>
          <ul>
            {patients.map(patient => (
              <li key={patient.id}>
                {patient.name} - {patient.condition} ({patient.personality})
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default PatientManager;
