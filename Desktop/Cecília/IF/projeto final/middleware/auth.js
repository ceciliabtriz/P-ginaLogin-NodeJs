//! Cria a função de autenticação:
const auth = (req, res, next) => {
    //* Verifica se a sessão está logada:
    if(req.session.logado){
        //? Continua:
        next();
    }
    else{
        //* Redireciona para a página de login se não tiver sido logado:
        return res.redirect('/login');
    }
}

//! Exporta o módulo de autenticação:
module.exports = auth;