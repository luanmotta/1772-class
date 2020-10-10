/*
Request object = {
  Nome: String,
  Sobrenome: String,
  NomeCompleto: String,
  Idade: Number,
  Dia: Number,
  Mês: Number,
  Ano: Number,
}

Object to Mount = {
  Nome: String,
  Sobrenome: String,
  NomeCompleto: String,
  Idade: Number,
  Dia: Number,
  Mês: Number,
  Ano: Number,
  Frase: String,
}

Frase: Oi, eu sou Luan Motta, tenho 23 anos, e sou Escritor(a) Tagarela Que esquece das reuniões.

*/

const http = require('http')
const https = require('https')
const whoAreYou = require('./whoAreYou')
const regexUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
const SERVER_PORT = 8080

var urls = []
var urlsFiltered = []
var responses = [];
var completed_requests = 0;

const googleSheetsURL =  'https://sheets.googleapis.com/v4/spreadsheets/13eOFLQTxo121a7CwJ-lAUmgDAxZJ5go1i9t8-dWUUW0/values/B3:B99?key=AIzaSyB_krgCvGveFrsA26mnR8AMFCKcP0QEeGo';
https.get(googleSheetsURL, (res) => {
  let data = ''
  res.on('data', chunk => {
    data += chunk
  })

  res.on('end', () => {
    urls = JSON.parse(data).values
    urls.filter(arrayUrl => {
      if (arrayUrl[0] && arrayUrl[0].match(regexUrl)) urlsFiltered.push(arrayUrl[0])
    })
    doRequests()
  })
})

const doRequests = () => {
  for (i in urlsFiltered) {
    https.get(urlsFiltered[i], (res) => {
      let data = ''
      res.on('error', error => {
        throw error
      })
      res.on('data', chunk => {
        data += chunk
      })
      res.on('end', () => {
        if (!data.includes('not found')) {
          responses.push(JSON.parse(data))
        }
        if (completed_requests++ === urlsFiltered.length - 1) {
          // All downloads are completed
          mountObjects()
        }
      })
    })
  }
}

const mountPhrase = (obj) => {
  return `Oi, eu sou ${obj.nomeCompleto}, tenho ${obj.idade} anos, e sou ${whoAreYou(obj.dia, obj.mes, obj.ano)}.`
}

const mountObjects = () => {
  responses.forEach(obj => {
    obj.frase = mountPhrase(obj)
  })
  renderPage()
}

const renderPage = () => {
  http.createServer((req, res) => {
    res.write(JSON.stringify(responses))
    res.end()
  }).listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))
}
