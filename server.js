const express = require('express')
const app = express()
const path = require('path');
const axios = require('axios')
const port = 3000

app.use('/static', express.static('static'))

app.get('/', (req, res) => {
//   res.send('Hello World!')
  res.sendFile(path.join(__dirname, 'static/index.html'))
})

app.get('/api/character', function(req, res) {
    // res.send(character)

    axios.get('https://swapi.dev/api/people/1')
  .then(function (response) {
    // handle success
    res.send(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})