const express = require('express');
const axios = require('axios');
const url = require('url');
const querystring = require('querystring');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/get', async (req, res) => {
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


// async function main() {
//     const response = await axios.get('http://www.baidu.com');
//     console.log(response.data);
// }

// main();