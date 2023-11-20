import 'path';

import db from './db/conn.mjs';

import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

// serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// test loading in client; delay all requests by 1 second
// do not change or remove or this line of code
app.use(function (req, res, next) { setTimeout(next, 1000) });

app.get('/', (req, res) => {
  res.json({ message: 'try loading' }).status(200);
});

app.post('/api/events/rsvp/:eventId', async (req, res) => {
  const eventId = parseInt(req.params.eventId);
  const rsvpStatus = req.body.rsvpStatus;

  const update = rsvpStatus ? { $inc: { headCount: 1 } } : { $inc: { headCount: -1 } };
  const result = await db.collection('events').updateOne({ id: eventId }, update);

  if (result.matchedCount === 0) {
    res.status(404).send('Event not found');
    return;
  }

  const updatedEvent = await db.collection('events').findOne({ id: eventId });
  res.json({ headCount: updatedEvent.headCount });
});




app.get('/api/events.json', async (req, res) => {
  const all_events = await db.collection('events').find().toArray()
  res.json(all_events);
});

app.get('/api/events/:eventId', async (req, res) => {
  const eventId = parseInt(req.params.eventId);
  const eventData = all_events.find(Event => (
    Event.id === eventId

  ))

  if (eventData) {
    res.json(eventData);
  } else {
    res.status(404).send('Event not found');
  }
});




// 404
app.use(function (req, res, next) {
  return res.status(404).json({ message: 'resource ' + req.url + ' not found' });
});

// 500 - Any server error
app.use(function (err, req, res, next) {
  return res.status(500).json({ error: err });
});

// listen for requests
app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}/`);
});
