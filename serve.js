const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function (req, res) {
  //   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(3000, () => console.log(`App is live on port ${3000}!`));
