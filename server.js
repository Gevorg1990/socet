const express = require('express');
const https = require('https');
const WebSocket = require('ws');

// const port = 6969;
// const server = http.createServer(express);
const wss = new WebSocket.Server('https://gevorg1990.github.io/socet/')

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
        
      }
    })
  })
})



// server.listen(port, function() {
//   console.log(`Server is listening on ${port}!`)
// })
