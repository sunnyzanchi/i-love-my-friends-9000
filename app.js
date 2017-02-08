const express = require('express');
const path = require('path');

const app = express();

// Public - static resources
app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./routes/index');
app.use('/', routes);

app.listen(3000, function(){
  console.log('App started');
});

module.exports = app;
