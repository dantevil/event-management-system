import { useEffect,useState } from "react";
import {getEvents} from "../services/eventService";
import {getVenues} from "../services/venueService";
import {getOrganizers } from "../services/organizerService";
import Events from '../components/Events';
import Venue from '../components/Venue';
import Organizers from '../components/Organizers';
import { useLocation } from 'react-router-dom';
import Attendees from '../components/Attendees';
import { useNavigate } from 'react-router-dom';

const RegisterPage = ()=>{
 const [events, setEvents] = useState([]);
 const [venues, setVenues] = useState([]);
 const [organizers, setOrganizers] = useState([]); 
 const location = useLocation();
 const emailId = location.state?.email || '';
 const navigate = useNavigate();

 useEffect(()=>{
    getEvents().then(res=> setEvents(res));
    getVenues().then(res=> setVenues(res));
    getOrganizers().then(res=> setOrganizers(res));
 },[])

 return (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f3f4f6', // light gray
    }}
  >
    <div
      style={{
        padding: '24px',
        width: '100%',
        maxWidth: '768px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
        Registeration Page
      </h1>

      <section>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>
          Available Events
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '16px',
          }}
        >
          {events.map((event) => (
            <Events key={event._id} event={event} email={emailId} />
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '24px', marginBottom: '8px' }}>
          Venues
        </h2>
        <Venue venues={venues} />
      </section>

      <section>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '24px', marginBottom: '8px' }}>
          Organizers
        </h2>
        <Organizers organizers={organizers} />
      </section>
       <section>
  <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '24px', marginBottom: '8px' }}>
    All Attendees
  </h2>
  <Attendees />
</section>
   <button type="button" style={{ width: '30%',marginLeft: '35%' }} onClick={()=>{navigate('/')}}>Sign Out</button>
    </div>
  </div>
);

}


export default RegisterPage;