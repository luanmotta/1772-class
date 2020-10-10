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
      responses.push(data)
      if (completed_requests++ === urls.length - 1) {
        // All downloads are completed
        mountObjects()
      }
    })
  })
}

const mountObjects = () => {
  for (let i = 0; i < responses.length; i++) {
    console.log(responses[i])
  }
}

const renderPage = () => {

}
