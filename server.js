const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  res.send('The app is running!')
})

app.listen(3000, () => {
  console.log('Flashcard App is listening on port 3000')
})