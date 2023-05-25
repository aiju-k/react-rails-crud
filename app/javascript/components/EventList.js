import React from 'react';
import PropTypes from 'prop-types';

export default function EventList(props) {
  const renderEvents = (eventArray) => {
    eventArray.sort((a, b) => new Date(b.event_data) - new Date(a.event_data));

    return eventArray.map((event) => (
      <li key={event.id}>
        {event.event_date}
        {' - '}
        {event.event_type}
      </li>
    ));
  };
  return (
    <div className="container">
      <h2>Events</h2>
      <ul>{renderEvents(props.events)}</ul>
    </div>
  );
}

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
