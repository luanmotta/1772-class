const http = require('http')

const SERVER_PORT = 6127

const nome = 'luan'
const sobrenome = 'motta'

const ano = 2020
const nascimento = 1997

const idade = ano - nascimento

const nomeCompleto = nome + ' ' + sobrenome

const resposta = {
  nome,
  sobrenome,
  nomeCompleto,
  idade
}

http.createServer((req, res) => {
  const responder = (resposta) => {
    res.write(JSON.stringify(resposta))
    res.end()
  }

  responder(resposta)

}).listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))
