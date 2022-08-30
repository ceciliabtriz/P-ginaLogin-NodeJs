//! Importar o express e instanciar ele:
const express = require('express');

//* Instanciamento do Express:
const app = express();

//! Definir a Engine do Projeto:
app.set('view engine', 'ejs');
app.set('views', './views');

//! Define a pasta public para conteúdo estático:
app.use(express.static('./public'));

//! Define que o app vai passar informações via Json:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//! Faz a definição de uma sessão no express:
//* Importa o módulo:
const session = require('express-session');

//* Define o Proxy como ativo:
app.set('trust proxy', 1);

//* Configura a sessão:
app.use(session({
    secret: '3a578703b77728e4a3620a24611950d5f1f649f4', //?Super$#90R
    resave: true,
    saveUninitialized: true,
    cookie: false
}));

//! Importar as rotas e configurar:
const routers = require('./routers/routers');
app.use(routers);

//! Definir a porta e iniciar o servidor:
const hostname = 'localhost';
const port = 900;

//* Iniciar o servidor:
app.listen(port, hostname, ()=>{
    console.log(`Servidor iniciado em http://${hostname}:${port} (Clique Ctrl+C)`);
});