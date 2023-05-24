const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect to the database
connectDB();

// Initialize middleware
app.use(cors());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

app.use(express.static('public', {
    setHeaders: (res, path) => {
      res.setHeader('Content-Type', mime.getType(path));
    },
  }));

// Define routes
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/therapist', require('./routes/api/therapist'));
app.use('/api/therapistp', require('./routes/api/profile'));
app.use('/assets', express.static('assets'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
