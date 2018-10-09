const express = require('express')
const next = require('next')
var dotenv = require('dotenv');


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

dotenv.load();


app.prepare()
.then(() => {
  const server = express()

  server.get('/l/:id', (req, res) => {
    const actualPage = '/logs'
    const queryParams = { id: req.params.id } 
    app.render(req, res, actualPage, queryParams)
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