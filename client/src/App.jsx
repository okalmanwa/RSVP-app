import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState({});
  const [headCounts, setHeadCounts] = useState({});
  const [rsvpPending, setRsvpPending] = useState({});

  useEffect(() => {
    axios.get('/api/events.json')
      .then(res => {
        setEventsData(res.data);
        setLoading(false);

        let initialRsvpStatus = {};
        let initialHeadCounts = {};
        let initialRsvpPending = {};

        res.data.forEach(event => {
          initialRsvpStatus[event.id] = false;
          initialHeadCounts[event.id] = event.headCount;
          initialRsvpPending[event.id] = false;
        });


        setRsvpStatus(initialRsvpStatus);
        setHeadCounts(initialHeadCounts);
        setRsvpPending(initialRsvpPending);
      })
      .catch(error => {
        setError(true);
        setLoading(false);
      });
  }, []);
  
  const handleRsvp = (eventId) => {
    setRsvpPending({ ...rsvpPending, [eventId]: true });
    axios.post(`/api/events/rsvp/${eventId}`, { rsvpStatus: !rsvpStatus[eventId] })
      .then(response => {
        setHeadCounts({ ...headCounts, [eventId]: response.data.headCount });

        setRsvpStatus({ ...rsvpStatus, [eventId]: !rsvpStatus[eventId] });

        setRsvpPending({ ...rsvpPending, [eventId]: false });
      })
      .catch(error => {
        setRsvpPending({ ...rsvpPending, [eventId]: false });
      });
  };

  const fetchData = () => {
    setLoading(true);
    setError(false);
    axios.get('/api/events.json')
      .then(res => {
        setEventsData(res.data);
        setLoading(false);

        const newRsvpStatus = {};
        const newHeadCounts = {};
        const newRsvpPending = {};

        res.data.forEach(event => {
          newRsvpStatus[event.id] = false;
          newHeadCounts[event.id] = event.headCount;
          newRsvpPending[event.id] = false;
        });

        setRsvpStatus(newRsvpStatus);
        setHeadCounts(newHeadCounts);
        setRsvpPending(newRsvpPending);
      })
      .catch(error => {
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);




  if (loading) return <div className='barsCont'>
    <p className='bar1'>|</p>
    <p className='bar2'>|</p>
    <p className='bar3'>|</p>
    <p className='bar4'>|</p>
  </div>;

  if (error) {
    return (
      <div className='barsCont center'>
        <p>Error loading events ): </p>
        <button onClick={fetchData}>Retry</button>
      </div>
    );
  }


  return (
    <div className="App">
      <h1>Kenyan Holidays RSVP</h1>
      <div className='HolidaysContainer'>
        {eventsData.map(event => (
          <div key={event.id} className='textContainer'>
            <h2>{event.name}</h2>
            <p>Date: {event.date}</p>
            <p>Description: {event.description}</p>
            <p>Head Count: {headCounts[event.id]}</p>
            <button onClick={() => handleRsvp(event.id)} disabled={rsvpPending[event.id]}>
              {rsvpStatus[event.id] ? 'Cancel RSVP' : 'RSVP'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
