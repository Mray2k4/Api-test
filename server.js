const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.use('/static', express.static('static'))

app.get('/', (req, res) => {
//   res.send('Hello World!')
  res.sendFile(path.join(__dirname, 'static/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})