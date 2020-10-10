const https = require('https')

const url =  'https://sheets.googleapis.com/v4/spreadsheets/13eOFLQTxo121a7CwJ-lAUmgDAxZJ5go1i9t8-dWUUW0/values/A3:A5?key=AIzaSyB_krgCvGveFrsA26mnR8AMFCKcP0QEeGo';

let values;

https.get(url, (res) => {
  let data = ''
  res.on('data', chunk => {
    data += chunk
  })

  res.on('end', function(){
    console.log(JSON.parse(data).values);
  })
})