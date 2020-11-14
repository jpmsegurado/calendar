import React from 'react';
import './index.css';
import moment from 'moment';
import Hour from '../Hour';

const getEventsFromStartToEnd = (start, end, events) => {
  return events.filter((event) => {
    const eventStart = moment(event.start);
    const condition = eventStart.isBetween(start, end) || eventStart.isSame(start);
    return condition;
  });
};

const formatEvents = (events, start) => {
  return events.map((event) => ({
    name: event.name,
    start: moment(start).add('minutes', event.start).toDate(),
    end: moment(start).add('minutes', event.end).toDate(),
  }));
}


const createHourList = (start, end, events) => {
  const aux = moment(start);
  const hours = [];

  while (aux.isBefore(end)) {
    const date = aux.toDate();
    const hourStart = moment(aux).startOf('hour');
    const hourEnd = moment(aux).endOf('hour');
    const listOfEventsPerHour = getEventsFromStartToEnd(hourStart, hourEnd, events);

    hours.push({ date, events: listOfEventsPerHour, key: date.getTime(), formatted: aux.format('h:mm'), ampm: aux.format('A') })
    aux.add(1, 'hour');
  }

  return hours;
}

const Calendar = ({ events }) => {
  const start = moment().set('hour', 8).startOf('hour');
  const end = moment(start).add(12, 'hours');
  const formattedEvents = formatEvents(events, start);
  const hours = createHourList(start, end, formattedEvents);

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