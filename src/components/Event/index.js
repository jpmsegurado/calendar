import React from 'react';
import './index.css';
import moment from 'moment';

const Event = ({ name, start, end }) => {
  const startDate = moment(start);
  const endDate = moment(end);
  const length = endDate.diff(startDate, 'hours');
  const height = length * 60;
  return (
    <div className="event" style={{ height }}>
      { name }
    </div>
  )
};

export default Event;