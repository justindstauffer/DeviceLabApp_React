const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const allDevices = require('./routes/api/allDevices');
const outDevices = require('./routes/api/outDevices');
const inDevices = require('./routes/api/inDevices');
const checkUsers = require('./routes/api/checkUsers');
const getDevice = require('./routes/api/getDevice');


app.use('/api/allDevices', allDevices);
app.use('/api/outDevices', outDevices);
app.use('/api/inDevices', inDevices);
app.use('/api/checkUsers', checkUsers);
app.use('/api/getDevice', getDevice);

//app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

