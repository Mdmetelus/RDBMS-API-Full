const server = require('./server');


const port = process.env.PORT || 7304;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on === \n=== http://localhost:${port} ===\n`);
});