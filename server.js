// server.js
require('dotenv').config();  // Load environment variables
const express = require('express');
const mailgun = require('mailgun-js');
const cors = require('cors');
const app = express();
const port = 5000;

// Mailgun configuration using environment variables
// const mg = mailgun({
//     apiKey: '1fe6f65cae7b3b54961ef9c72b899ddf-f6fe91d3-c050102b',
//     domain: 'sandbox290d6b1c74e04c4ea2321a5f3a2256a5.mailgun.org'
// });

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS to allow frontend requests

// Welcome email route
app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    const data = {
        from: 'Dev@Deakin <no-reply@yourdomain.com>',
        to: email,
        subject: 'Welcome to Dev@Deakin',
        text: 'Thank you for subscribing to Dev@Deakin. We are excited to have you on board!'
    };

    mg.messages().send(data, (error, body) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error sending email' });
        }
        res.status(200).json({ message: 'Welcome email sent' });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
