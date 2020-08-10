const express = require('express');
const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;
const path = require('path');

// DB
connectDB();

// init middleware
app.use(express.json({ extendend: false }));

// ROUTES
app.use('/api/images', require('./routes/images'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  console.log('prod prod');
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

app.listen(PORT, () => {
  console.log('SERVER IS AT: http://localhost:5000');
});
