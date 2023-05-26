import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const EventList = ({ events }) => {
  const [currentEvent, setCurrentEvent] = useState();

  const renderEvents = (eventArray) => {
    eventArray.sort((a, b) => new Date(b.event_data) - new Date(a.event_data));

    return eventArray.map((event) => (
      <li key={event.id} id={String(event.id)} className={event.id === currentEvent ? 'active' : ''}>
        <NavLink to={`/events/${event.id}`} onClick={() => setCurrentEvent(event.id)}>
          {event.event_date}
          {' - '}
          {event.event_type}
        </NavLink>
      </li>
    ));
  };

  return (
    <div className="eventList">
      <h2>Events</h2>
      <Link to="/events/new">new</Link>
      <ul>{renderEvents(events)}</ul>
    </div>
  );
};

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    event_type: PropTypes.string,
    event_date: PropTypes.string,
    title: PropTypes.string,
    speaker: PropTypes.string,
    host: PropTypes.string,
    published: PropTypes.bool,
  })).isRequired,
};

export default EventList;
