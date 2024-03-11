const Joya = require('../models/joya.model');

exports.get_joyas = (request, response, next) => {
    response.render('creajoya', {
        username: request.session.username || '',
    }
    );
};

exports.post_joyas = (request, response, next) => {
    console.log(request.body);
    const mi_joya = new Joya(
        request.body.marca, 
        request.body.nombre,
        request.body.tipo, 
        request.body.material,
        request.body.piedra, 
        request.body.peso,
        request.body.numero_producto, 
        request.body.imagen
    );
    mi_joya.save();
    response.redirect('/joyas');
};

exports.get_misjoyas = (request, response, next) => {
    console.log(request.cookies);
    console.log(request.cookies.ultima_joya);
    response.render('misjoyas', {
        username: request.session.username || '',
        ultima_joya: request.cookies.ultima_joya || '',
        joyas: Joya.fetchAll(),
    });
};