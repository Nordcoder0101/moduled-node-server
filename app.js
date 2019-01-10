const http = require('http')
const static_contents = require('./static')

server = http.createServer((req, res) => {
  static_contents(req, res)
});

server.listen(8000, () => console.log("Server running on port 8000") )

