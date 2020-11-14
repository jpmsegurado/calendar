import React from 'react';
import './index.css';
import moment from 'moment';

const Event = ({ name, start, end, conflicting }) => {
  const startDate = moment(start);
  const endDate = moment(end);
  const length = endDate.diff(startDate, 'minutes') / 60;
  const hourHeight = 76;
  const height = length * hourHeight;
  const minutesInHour = 60;
  const startMinutes = startDate.get('minutes');
  const top = hourHeight * (startMinutes / minutesInHour);
  const width = conflicting ? 'calc(50% - 13px)' : '100%';

  return (
    <div className="event" style={{ height, top, width }}>
      { name }
    </div>
  )
};

export default Event;