const express = require('express');
const body = require('body-parser');
const app = express();
const contactRouter = require('../routes/contact.js');

app.use(body());
app.use('/contacts', contactRouter);

module.exports = app;