console.log('Loading server...')
const PORT = 3000

const express = require('express')

const app = express()

// load middlware

// REST endpoints/routes
// Create (post)

// Read (get one)
// /logs?courseId=4690&uvuId=10111111
app.get('/', (req, res, err) => {
  const courseId = req.param('courseId')
  const uvuId = req.param('uvuId')
  res.send(`get logs ${courseId} ${uvuId}`)

  //get the data from the json file
  // fileter for only wha tyou need
  // send it back
})

// Update (put)

// Delete

// List (get all)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
