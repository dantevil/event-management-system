import { registerAttendee } from '../services/attendeeService';

export const Events = ({ event,email }) =>{
 const handleRegisterEvent = async () => {
  await registerAttendee(event._id, event.title, email);
  alert('Registration Done!');
};

  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{event.title}</h3>
      <p>{event.description}</p>
      <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
      <button
        onClick={handleRegisterEvent}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Register Event
      </button>
    </div>
  );
}

export default Events;