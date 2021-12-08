var express = require('express');
const bodyParser = require('body-parser');

var app = express();

var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(require('./routes/index'));

app.get( '/', (req, res)=>{
    res.json({
        ok: true,
        msg: 'Hello World!'
    });
} );

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});