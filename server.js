const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 4000;

mongoose.connect('mongodb://localhost/todolistmaster', { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));


require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

app.listen(PORT, function(){
    console.log(`App is now listening on PORT ${PORT}`)
  });