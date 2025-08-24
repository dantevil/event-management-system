import { useEffect, useState } from 'react';
import { getAttendeesByEvent } from '../services/attendeeService';

const Attendees = ({ eventId }) =>{
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    getAttendeesByEvent(eventId).then(res => setAttendees(res));
  }, [eventId]);

  return (
    <ul className="mt-2 text-sm text-gray-700">
      {attendees.map(ele => ( 
        <li key={ele._id}>{ele?.name}</li>
      ))}
    </ul>
  );
}

export default Attendees;