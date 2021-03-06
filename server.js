//Chunk 1
const express = require('express');
const sendMail = require('./mail');
const app = express();
const log = console.log;
const path = require('path');

const PORT = 8080;

//Chunk 2
// Data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// email, subject, text
app.post('/email', (req, res) => {
    const { subject, email, text } = req.body;
    log('Data: ', req.body);

    sendMail(email, subject, text, function(err, data) {
        if (err) {
            log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        log('Email sent!!!');
        return res.json({ message: 'Email sent!!!!!' });
    });
});

// Render home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Error page
app.get('/error', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'error.html'));
});

// Email sent page
app.get('/email/sent', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'emailMessage.html'));
});


app.listen(PORT, () =>log('Server is starting on PORT,',8080))