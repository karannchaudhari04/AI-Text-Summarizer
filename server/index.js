const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const summarizeText = require('./summarize.js');
require('dotenv').config();

const port = process.env.PORT || 3000;

// ✅ Allow requests from your Vercel frontend
app.use(cors({
  origin: 'https://ai-text-summerizer.vercel.app', // ✅ Must match exactly
  methods: ['POST'],
}));


app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// POST route
app.post('/summarize', (req, res) => {
  const text = req.body.text_to_summarize;

  summarizeText(text)
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      console.log(error.message);
      res.status(500).send("Something went wrong");
    });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
