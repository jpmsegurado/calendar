import React from 'react';
import moment from 'moment';
import './index.css';

const Hour = ({ date, formatted, ampm }) => {
  const half = moment(date).add(30, 'minutes').format('hh:mm')
  return (
    <div className="hour" formatted-hour={formatted} ampm={ampm}>
      <div className="half">
        { half }
      </div>
    </div>
  )
};

export default Hour;