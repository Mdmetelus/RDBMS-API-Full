const express = require('express');
const helmet = require('helmet');
const server = express();
const chRoutes = require('./allRoutes/chRoutes');

server.use(express.json());
server.use(helmet());

server.use('/api/cohorts', chRoutes);
// server.use('/api/students', stRoutes);


//routes
server.get('/', (req, res) => {
  res.send(`API working.\n Sanity Check\n Test Route!`);
});



module.exports = server;