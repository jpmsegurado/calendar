import React from 'react';
import './index.css';
import moment from 'moment';
import Hour from '../Hour';

const Calendar = () => {
  const start = moment().set('hour', 8).startOf('hour');
  const aux = moment(start);
  const end = moment(start).add(12, 'hours');

  const hours = []

  while (aux.isBefore(end)) {
    const date = aux.toDate();
    hours.push({ date, key: date.getTime(), formatted: aux.format('hh:mm'), ampm: aux.format('A') })
    aux.add(1, 'hour');
  }

  return (
    <div className="calendar">
      {hours.map(({ date, key, formatted, ampm }) => (
        <Hour
          date={date}
          key={key}
          formatted={formatted}
          ampm={ampm}
        />
      ))}
    </div>
  )
}

export default Calendar;