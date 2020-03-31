const express   = require('express');
const cors      = require('cors');
const routes    = require('./routes');

const app = express();

//Quando for colocar a api em produção, descomentar
// app.use(cors({
//     origin: 'http://alexsousa.eti.br'
// }));

app.use(cors());

app.use(express.json());
app.use(routes);


app.listen(3333);