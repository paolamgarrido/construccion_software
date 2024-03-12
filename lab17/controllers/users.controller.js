exports.get_login = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
    });
};

exports.post_login = (request, response, next) => {
    request.session.username = request.body.username;
    const user = request.body.username; 
    response.setHeader('Set-Cookie', 'Usuario=' + user);//
    response.redirect('/home');
};

exports.get_logout = (request, response, next) => {
    //request.session.username = ''; // 
    request.session.destroy(() => {
        response.redirect('/');
    });
};
