import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <h1>Select a Date</h1>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
            />
            <p>Selected Date: {startDate.toLocaleDateString()}</p>
        </div>
    );
};

export default DatePickerComponent;

