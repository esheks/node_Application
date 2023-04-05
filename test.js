const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// configure rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minute
  max: 5, // limit each IP to 5 requests per windowMs. we can adjust this to any number we want
  message: 'Too many requests from this IP, please try again after 10 minutes'
});

app.use(limiter);

// define API routes
app.get('/', (req, res) => {
  res.send('Hello, DevOps is great');
});

// define Another API routes
app.get('/test', (req, res) => {
  res.send('Hello, New path');
});

// start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
