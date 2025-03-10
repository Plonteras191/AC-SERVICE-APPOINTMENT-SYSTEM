import React from 'react';
import '../styles/Calendar.css';

const Calendar = ({ availableDates, onDateSelect, selectedDate }) => {
  return (
    <div className="calendar-container">
      {availableDates.map((date) => {
        const isSelected = date === selectedDate;
        return (
          <div
            key={date}
            className={`calendar-date ${isSelected ? 'selected' : ''}`}
            onClick={() => onDateSelect(date)}
          >
            {date}
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
