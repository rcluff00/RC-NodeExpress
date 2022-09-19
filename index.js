console.log('Loading server...')

const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')

const PORT = 3000
const db = require('./db.json')

const app = express()

// load middlware
app.use(logger('dev'))
app.use(express.static('public'))
app.use(helmet())

// bodyParse
// helmet

// REST endpoints/routes
// Create (post)

// Read (get one)
// /logs?courseId=4690&uvuId=10111111
// /api/v1/logs?courseId=4690&uvuId=10111111
// api/v1/logs
app.get('/api/v1/logs', (req, res, err) => {
  const courseId = req.param('courseId')
  const uvuId = req.param('uvuId')
  // const { courseId, uvuId } = req.param()
  res.send(`Get logs ${courseId} ${uvuId}`)

  // get the data from the json file
  // fileter for only wha tyou need
  // send it back
})

// Update (put)
// app.post('/', (req, res) => {
//   res.send('Got a POST request')

//   // change db
//   // write to file
//   // return id
//   // return
//   // TODO after get post working, change to put here and on client
// })

// Delete

// List (get all)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('*', (req, res, err) => {
  res.send(`File not found. Sorry bud.`)
  // res.sendFile('filepath/to/404page.html')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

function gracefulShutdown() {
  // Clean up and prepare to die
  // ...

  server.close(() => {
    console.log('Server is closed')
  })
}

process.on('SIGINT', gracefulShutdown)
