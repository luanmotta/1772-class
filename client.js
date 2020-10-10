/*
{
  Nome: String,
  Sobrenome: String,
  NomeCompleto: String,
  Idade: Number,
  Dia: Number,
  Mês: Number,
  Ano: Number,
  Frase: String
}

Oi, eu sou Mikael, tenho X anos, e sou Apresentador(a) Crente Que tá sempre com fome.

*/

var https = require('https')
var urls = ["https://16b69ce1b783.ngrok.io"]
var responses = [];
var completed_requests = 0;

for (i in urls) {
    https.get(urls[i], function(res) {
        responses.push(res);
        completed_requests++;
        if (completed_requests == urls.length) {
            // All download done, process responses array
            console.log(responses);
        }
    });
}
