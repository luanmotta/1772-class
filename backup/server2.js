const http = require('http')
const SERVER_PORT = 6127

function calculaIdade(birthday) {
  var ageDifMs = Date.now() - birthday.getTime()
  var ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

const nome = 'luan'
const sobrenome = 'motta'
const dataDeNascimento = new Date(1997, 6, 3) // ano, mes, dia

const nomeCompleto = nome + ' ' + sobrenome

const resposta = {
  nome,
  sobrenome,
  nomeCompleto,
  dataDeNascimento,
  dia: dataDeNascimento.getDay() - 1,
  mes: dataDeNascimento.getMonth(),
  ano: dataDeNascimento.getFullYear(),
  idade: calculaIdade(dataDeNascimento)
}

http.createServer((req, res) => {
  const responder = (resposta) => {
    res.write(JSON.stringify(resposta))
    res.end()
  }

  responder(resposta)

}).listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))
