const express = require('express')

const server = express()

server.get('/gameday', (req, res) => {
  res.send('<h1>Game Day!!!</h1>')
})

module.exports = server
