const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const mongoDBConnection = require('./config/mongoDBConnection');
const loginRoutes = require('./routes/loginRoutes');
const eventRoutes = require('./routes/eventRoutes');
const venueRoutes = require('./routes/venueRoutes');
const organizerRoutes = require('./routes/organizerRoutes');
const attendeeRoutes = require('./routes/attendeeRoutes');

dotenv.config();
mongoDBConnection();

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

app.use('/api/auth', loginRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/venues', venueRoutes);
app.use('/api/organizers', organizerRoutes);
app.use('/api/attendees', attendeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));