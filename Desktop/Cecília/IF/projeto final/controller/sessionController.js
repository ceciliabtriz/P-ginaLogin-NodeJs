//! Cria a classe de Controle da Sessão:
class SessionController{
    //* Cria um método inicial:
    async login(req, res){
        //? Verifica se o usuário está logado:
        if(req.session.logado){
            // Redireciona para o Home:
            return res.redirect('/home');
        }

        //? Redireciona para página de login:
        return res.render('pages/login', {logado: req.session.logado, erro: ""});
    }

    //* Cria o método de logar:
    logar(req, res){
        //? Define um usuário:
        let user = {
            email: 'ceciliabtriz@gmail.com',
            password: '123456'
        };

        //? Pega o email e a senha da página:
        const { email, password } = req.body;

        //? Verifica se as informações estão corretas:
        if(!(email === user.email && password === user.password)){
            // Retorna para a página de login:
            return res.render('pages/login', {logado: req.session.logado, erro: "E-mail ou senha errados!"});
        }
        //? Salva o login:
        req.session.logado = true;
        //? Redireciona o usuário para Home:
        return res.redirect('/home' );
    }
    //* Define o método de Logout:
    logout(req, res){
        //? Define que o usuário não está mais logado:
        req.session.logado = false;
        //? Redireciona o usuário para janela de login:
        return res.redirect('/login');
    }
}

//! Exporta a classe instanciada:
module.exports = new SessionController();