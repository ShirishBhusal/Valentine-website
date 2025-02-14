const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS and JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
  res.render('index');
});

// Handle name submission
app.post('/check-name', (req, res) => {
  const { name } = req.body;
  if (name.toLowerCase() === 'ashmi') {
    res.render('welcome', { name: 'Ashmi Bhandari' });
  } else {
    res.render('sorry');
  }
});

// Hurray Page route
app.get('/hurray', (req, res) => {
  res.render('hurray');
});

// Love Counter Page route
app.get('/love-counter', (req, res) => {
  res.render('love-counter');
});

// Quiz Page route
app.get('/quiz', (req, res) => {
  res.render('quiz');
});

// Reasons Page route
app.get('/reasons', (req, res) => {
  res.render('reasons');
});

// Valentine Card Page route
app.get('/valentine', (req, res) => {
  res.render('valentine');
});
// Final Page route
app.get('/final', (req, res) => {
  res.render('final');
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});