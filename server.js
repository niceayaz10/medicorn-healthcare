const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors package

const app = express();
const port = 3000;

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON
app.use(bodyParser.json());

// Endpoint to proxy requests
app.post('/proxy', (req, res) => {
  const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfNIDPE6Yi4fRyceZWBXZSNFHQwrRyRonw8V-MAUn_eJuL6gw/formResponse';
  const formData = req.body;

  // Forward the form data to Google Forms
  request.post(
    { url: formUrl, form: formData },
    (error, response, body) => {
      if (error) {
        return res.status(500).send('Error sending form data');
      }
      res.status(200).send('Form submitted successfully');
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
