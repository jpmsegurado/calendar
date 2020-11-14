import React from 'react';
import './index.css';
import moment from 'moment';

const Event = ({ name, start, end }) => {
  const startDate = moment(start);
  const endDate = moment(end);
  const length = endDate.diff(startDate, 'hours');
  const hourHeight = 60;
  const height = length * hourHeight;
  const minutesInHour = 60;
  const startMinutes = startDate.get('minutes');
  const top = hourHeight * (startMinutes / minutesInHour);

  return (
    <div className="event" style={{ height, top }}>
      { name }
    </div>
  )
};

export default Event;