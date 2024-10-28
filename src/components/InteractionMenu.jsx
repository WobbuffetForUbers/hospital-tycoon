import React from 'react';

    function InteractionMenu() {
      return (
        <div>
          <h2>Interaction Menu</h2>
          <div>
            <h3>Interview Questions</h3>
            <ul>
              <li>How are you feeling today?</li>
              <li>Do you have any allergies?</li>
              {/* Add more questions */}
            </ul>
          </div>
          <div>
            <h3>Examination Maneuvers</h3>
            <ul>
              <li>Check temperature</li>
              <li>Listen to heartbeat</li>
              {/* Add more maneuvers */}
            </ul>
          </div>
          <div>
            <h3>Diagnosis Options</h3>
            <ul>
              <li>Flu</li>
              <li>Migraine</li>
              {/* Add more options */}
            </ul>
          </div>
        </div>
      );
    }

    export default InteractionMenu;
