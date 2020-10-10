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

const https = require('https')
const whoAreYou = require('./whoAreYou')
const urls = ['https://eecc3e35f9f3.ngrok.io']
var responses = [];
var completed_requests = 0;

for (i in urls) {
  https.get(urls[i], (res) => {
    let data = ''
    res.on('data', chunk => {
      data += chunk
    })

    res.on('end', function(){
      responses.push(JSON.parse(data))
      if (completed_requests++ === urls.length - 1) {
        // All downloads are completed
        mountObjects()
      }
    })
  })
}

const mountPhrase = (obj) => {
  return `Oi, eu sou ${obj.nomeCompleto}, tenho ${obj.idade} anos, e sou ${whoAreYou(obj.dia, obj.mes, obj.ano)}.`
}

const mountObjects = () => {
  responses.forEach(obj => {
    obj.frase = mountPhrase(obj)
  })
  console.log(responses)
}

const renderPage = () => {

}
