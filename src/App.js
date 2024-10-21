import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [startDate, setStartDate] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Schedule</h1>
      </header>
      <DatePicker 
        selected={startDate} 
        onChange={(date) => setStartDate(date)} 
        placeholderText="Select a date"
      />
      <button>Continue</button>
    </div>
  );
}

export default App;


