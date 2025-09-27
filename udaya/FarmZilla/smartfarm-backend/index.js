const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const result = await axios.post(
      'http://localhost:11434/api/generate',
      {
        model: 'llama2', // or 'mistral', etc.
        prompt: message,
        stream: false,
      }
    );

    res.json({ response: result.data.response.trim() });
  } catch (err) {
    console.error('Error from Ollama:', err.message);
    res.status(500).json({ response: 'Server error!' });
  }
});

app.listen(5000, () => {
  console.log('✅ Server running on http://localhost:5000');
});
