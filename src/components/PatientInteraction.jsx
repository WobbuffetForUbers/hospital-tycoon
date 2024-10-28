import React, { useState } from 'react';
    import './PatientInteraction.css';

    function PatientInteraction({ patient, onDiagnose }) {
      const [selectedDiagnosis, setSelectedDiagnosis] = useState('');
      const [examinationResult, setExaminationResult] = useState('');
      const [interviewResponse, setInterviewResponse] = useState('');
      const [diagnosisFeedback, setDiagnosisFeedback] = useState('');

      const interviewQuestions = [
        'How are you feeling today?',
        'Do you have any allergies?',
        'Have you experienced this before?',
        'Are you taking any medication?',
      ];

      const examinationManeuvers = [
        'Check temperature',
        'Listen to heartbeat',
        'Examine throat',
        'Check reflexes',
      ];

      const handleDiagnosis = () => {
        if (selectedDiagnosis === patient.condition) {
          setDiagnosisFeedback('Correct diagnosis! Patient treated.');
          onDiagnose(true);
        } else {
          setDiagnosisFeedback('Incorrect diagnosis! Reputation decreased.');
          onDiagnose(false);
        }
      };

      const performExamination = (maneuver) => {
        let result = '';
        switch (maneuver) {
          case 'Check temperature':
            result = patient.condition === 'Flu' ? 'High temperature detected.' : 'Normal temperature.';
            break;
          case 'Listen to heartbeat':
            result = 'Heartbeat is normal.';
            break;
          case 'Examine throat':
            result = patient.condition === 'Flu' ? 'Redness and swelling observed.' : 'Throat appears normal.';
            break;
          case 'Check reflexes':
            result = 'Reflexes are normal.';
            break;
          default:
            result = 'No significant findings.';
        }
        setExaminationResult(result);
      };

      const askInterviewQuestion = (question) => {
        let response = '';
        switch (question) {
          case 'How are you feeling today?':
            response = getInterviewResponse();
            break;
          case 'Do you have any allergies?':
            response = 'No known allergies.';
            break;
          case 'Have you experienced this before?':
            response = 'Yes, a few times.';
            break;
          case 'Are you taking any medication?':
            response = 'Just over-the-counter pain relief.';
            break;
          default:
            response = 'No response.';
        }
        setInterviewResponse(response);
      };

      const getInterviewResponse = () => {
        switch (patient.personality) {
          case 'Friendly':
            return 'I feel okay, just a bit under the weather.';
          case 'Anxious':
            return 'I’m not sure, I just want to get better.';
          case 'Calm':
            return 'I’m feeling alright, just a bit of discomfort.';
          case 'Irritable':
            return 'I don’t have time for this, just fix it!';
          default:
            return 'I’m not sure how I feel.';
        }
      };

      return (
        <div className="patient-interaction">
          <h3>Interacting with {patient.name}</h3>
          <div className="interaction-section">
            <h4>Interview</h4>
            <ul>
              {interviewQuestions.map((question, index) => (
                <li key={index}>
                  <button onClick={() => askInterviewQuestion(question)}>{question}</button>
                </li>
              ))}
            </ul>
            <p>{interviewResponse}</p>
          </div>
          <div className="interaction-section">
            <h4>Examination</h4>
            <ul>
              {examinationManeuvers.map((maneuver, index) => (
                <li key={index}>
                  <button onClick={() => performExamination(maneuver)}>{maneuver}</button>
                </li>
              ))}
            </ul>
            <p>{examinationResult}</p>
          </div>
          <div className="interaction-section">
            <h4>Diagnosis Options</h4>
            <select value={selectedDiagnosis} onChange={(e) => setSelectedDiagnosis(e.target.value)}>
              <option value="">Select Diagnosis</option>
              <option value="Flu">Flu</option>
              <option value="Migraine">Migraine</option>
              <option value="Sprained Ankle">Sprained Ankle</option>
              <option value="Stomach Ache">Stomach Ache</option>
              {/* Add more options */}
            </select>
            <button onClick={handleDiagnosis}>Diagnose</button>
            <p>{diagnosisFeedback}</p>
          </div>
        </div>
      );
    }

    export default PatientInteraction;
