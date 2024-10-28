import React from 'react';

    function DailySummary({ revenue, reputation, onContinue, onUnlockSpecialty }) {
      return (
        <div>
          <h2>Daily Summary</h2>
          <p>Revenue: ${revenue.toFixed(2)}</p>
          <p>Reputation: {reputation}</p>
          <button onClick={onContinue}>Continue to Next Day</button>
          <button onClick={onUnlockSpecialty}>Unlock Specialty Services</button>
        </div>
      );
    }

    export default DailySummary;
