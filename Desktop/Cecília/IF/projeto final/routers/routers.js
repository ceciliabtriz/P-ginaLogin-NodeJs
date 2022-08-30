//! Importar o Router e instancia:
const { Router } = require('express');
const homeController = require('../controller/homeController');
const routers = new Router();

//! Importa os Controllers:
//* Home Controller:
const Home = require('../controller/homeController');
//* SessionController:
const Session = require('../controller/sessionController');

//! Importa o middleware:
const auth = require('../middleware/auth');

//! Definir as nossas rotas:
//* Definir rota Index:
routers.get('/', Home.index);

//* Definir rota Login:
routers.get('/login', Session.login);

//* Define a rota de Logar:
routers.post('/logar', Session.logar);

//* Define a rota de Home:
routers.get('/home', auth, Home.home);

//* Define a rota de usuários:
routers.get('/users', auth, Home.users);

//* Define a rota de registro de usuários:
routers.get('/users/register', auth, Home.register);

//* Define a rota de atualizar usuários:
routers.get('/users/update/:id', auth, Home.update);

//* Define a rota de deletar usuários:
routers.get('/users/delete/:id', auth, Home.delete);

//* Define a rota de Logout:
routers.get('/logout', Session.logout);

//! Exportar as rotas:
module.exports = routers;