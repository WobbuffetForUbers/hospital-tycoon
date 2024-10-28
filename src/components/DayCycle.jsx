import React, { useState, useEffect } from 'react';
    import './DayCycle.css';

    function DayCycle({ onDayEnd }) {
      const [timeLeft, setTimeLeft] = useState(360); // 6 minutes in seconds

      useEffect(() => {
        if (timeLeft > 0) {
          const timer = setInterval(() => {
            setTimeLeft(timeLeft - 1);
          }, 1000);
          return () => clearInterval(timer);
        } else {
          onDayEnd();
        }
      }, [timeLeft, onDayEnd]);

      const handleEndDayEarly = () => {
        setTimeLeft(0); // Immediately end the day
      };

      return (
        <div className="day-cycle">
          <h3>Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</h3>
          <button onClick={handleEndDayEarly}>End Day Early</button>
        </div>
      );
    }

    export default DayCycle;
