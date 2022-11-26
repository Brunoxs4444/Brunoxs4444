const express = require('express');
const bodyParser = require('body-parser');
// const consign = require('consign);

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.listen(3000, () => console.log('servidor rodando na porta 3000'));

app.get('/', function(req, res){
    res.sendFile(__dirname+'/view/index.html');
});

app.get('/teste', (req, res) => res.send('Servidor rodando em desenvolvimento'));

app.post('/atendimento', (req, res) => {
    console.log(req.body);
    res.send('Estamos na rota de atendimento');
});