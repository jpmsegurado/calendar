import React from 'react';
import moment from 'moment';
import Event from '../Event';
import './index.css';

const Hour = ({ date, formatted, ampm, events }) => {
  const half = moment(date).add(30, 'minutes').format('h:mm');

  return (
    <div className="hour" formatted-hour={formatted} ampm={ampm}>
      <div className="half">
        { half }
      </div>

      { events.map(({ name, start, end, overlapping }) => (
        <Event key={name} name={name} start={start} end={end} overlapping={overlapping}/>)
      )}
    </div>
  )
};

export default Hour;