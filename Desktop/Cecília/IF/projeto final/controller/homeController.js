//! Define os usuários:
var users = [
    {
        'name':'Pedro Almeida',
        'email':'pedro.almeida@gmail.com',
        'password':'9876'    
    }, 
    {
        'name':'Fernanda Lima',
        'email': 'felima@gmail.com',
        'password':'felima'    
    },
    {
        'name': 'Lucas Alvez',
        'email': 'l.alvez@gmail.com',
        'password': 'eusoulindo'
    },
    {
        'name': 'Armando Felipe',
        'email': 'armandfel@gmail.com',
        'password': '2323'
    },
    {
        'name': 'José Azevedo',
        'email': 'jose123@gmail.com',
        'password': 'lulu123'
    }
];

//! Cria a classe de controller:
class HomeController{
    //* Define o Index do Controller:
    index(req, res) {
        res.render('index', {logado: req.session.logado});
    }
    
    //* Define o Home do Controller:
    home(req, res){
        res.render('pages/home', {logado: req.session.logado, users: users});
    }

    //* Define a página Users do Controller:
    users(req, res){
        res.render('pages/users', {logado: req.session.logado, users: users});
    }

    //* Define a página de registrar usuários:
    register(req, res){
        res.render('pages/register', {logado: req.session.logado});
    }

    //* Define a página de atualizar usuários:
    update(req, res){
        var id = req.params.id
        res.render('pages/update', {logado: req.session.logado, user: users[id]});
    }

    //* Define a página de deletar usuários:
    delete(req, res){
        var id = req.params.id
        res.render('pages/delete', {logado: req.session.logado, user: users[id], id: id});
    }
}

//! Exportar o HomeController:
module.exports = new HomeController();