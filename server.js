const express = require('express')
const next = require('next')
var dotenv = require('dotenv');
const api = require('./operations/get-item')
const logsapi = require('./operations/fetch-logs')


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

dotenv.load();


app.prepare()
.then(() => {
  const server = express()

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id } 
    app.render(req, res, actualPage, queryParams)
})

// Serve the item webpage with next.js as the renderer
server.get('/logs', (req, res) => {
  const itemData = logsapi.getLogs()
  app.render(req, res, '/logs', { itemData })
})

// When rendering client-side, we will request the same data from this route
server.get('/_data/logs', (req, res) => {
  const itemData = api.getItem()
  res.json(itemData)
})

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3002, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3002')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})