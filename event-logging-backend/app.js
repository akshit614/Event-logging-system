const eventRoutes = require('./routes/eventRoutes');
const queryRoutes = require('./routes/queryRoutes');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', eventRoutes);
app.use('/api', queryRoutes);

module.exports = app;
