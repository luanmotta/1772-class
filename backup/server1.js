const http = require('http')

const SERVER_PORT = 6127

http.createServer((req, res) => {
  const responder = (resposta) => {
    res.write(JSON.stringify(resposta))
    res.end()
  }

  responder('OK')

}).listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))
