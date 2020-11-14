import React from 'react';
import './index.css';
import moment from 'moment';
import Hour from '../Hour';

const generateEvents = date => {
  return [
    { name: 'Meeting', start: moment(date), end: moment(date).add(1, 'hours') }
  ]
}

const Calendar = () => {
  const start = moment().set('hour', 8).startOf('hour');
  const aux = moment(start);
  const end = moment(start).add(12, 'hours');

  const hours = [];

  while (aux.isBefore(end)) {
    const date = aux.toDate();
    hours.push({ date, key: date.getTime(), formatted: aux.format('h:mm'), ampm: aux.format('A'), events: generateEvents(aux) })
    aux.add(1, 'hour');
  }

  return (
    <div className="calendar">
      {hours.map(({ date, key, formatted, ampm, events }) => (
        <Hour
          date={date}
          key={key}
          formatted={formatted}
          ampm={ampm}
          events={events}
        />
      ))}
    </div>
  )
}

export default Calendar;