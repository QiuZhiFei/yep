const express = require('express');
const axios = require('axios');
const url = require('url');

const app = express();
const PORT = 1234;

// app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const originalUrl = req.query.url;

        if (!originalUrl) {
            return res.status(400).json({ error: 'Missing URL parameter' });
        }

        const targetUrl = originalUrl;

        if (!targetUrl) {
            return res.status(400).json({ error: 'Invalid URL parameter in query string' });
        }

        const response = await axios.get(targetUrl);

        res.send(response.data);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


module.exports = app;