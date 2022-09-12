console.log('Loading server...')
const PORT = 3000

const express = require('express')

const app = express()

// load middlware

// REST endpoints/routes

// Create (post)

// Read (get one)

// Update (put)

// Delete

// List (get all)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
