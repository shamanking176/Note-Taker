const express = require('express');
const path = require('path');
const fs = require('fs');
const html = require('./routes/HTMLroute')
const api = require('./routes/APIroute.js');

const PORT = process.env.PORT || 3001;

const app = express();







app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);
app.use('/',html)






app.listen(PORT, () =>
  console.log(`App listening at ${PORT} 🚀`)
);
