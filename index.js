const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080');
});

app.get('/pet', (request, response) => {
    response.send("미야옹 왕왕");
});

app.get('/food', (request, response) => {
    response.send("후루룩 쫩쫩");
});

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
});
