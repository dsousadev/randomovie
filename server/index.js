const express = require('express');
const parser = require('body-parser');
let PORT = 3000;
const app = express();



app.use(express.static('client'));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.listen(PORT);
