console.log('Loading server...')
const PORT = 3000

const express = require('express')

const app = express()

// load middlware

// REST endpoints/routes
// Create (post)

// Read (get one)
// /logs?courseId=4690&uvuId=10111111
app.get('/api/v1/logs?courseId=4690&uvuId=10111111', (req, res, err) => {
  const courseId = req.params('courseId')
  const uvuId = req.params('uvuId')
  res.send(`get logs ${courseId} ${uvuId}`)
})

// Update (put)

// Delete

// List (get all)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
