
require('dotenv').config();
const port = process.env.APP_PORT;
const http = require('http');
const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());
if(process.env.NODE_ENV === 'development') {
    const morgan = require('morgan')('dev');
    app.use(morgan);
}

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/upload', require('./routes/upload'));

// Handling errors for 404 not-founds
app.use((req, res) => {
    res.status(404).json({
        error: "Not found!"
    });
});

// Handling errors for any other cases from whole application
app.use((err, req, res) => {
    // TODO: log err.message
    res.status(500).json({
        error: "Something went wrong!"
    });
});

http.createServer(app);
app.listen(port, () => {
    console.log("Server started on port " + port + " !!!");
});
