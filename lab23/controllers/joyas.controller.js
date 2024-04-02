const Joya = require('../models/joya.model');

exports.get_joyas = (request, response, next) => {
    response.render('creajoya', {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
    });
};

exports.post_joyas = (request, response, next) => {
    console.log(request.body);
    console.log(request.file);
    const mi_joya = new Joya(
        request.body.marca, 
        request.body.nombre,
        request.body.tipo, 
        request.body.material,
        request.body.piedra, 
        request.body.peso,
        //imagen
        request.file.filename
    );
    mi_joya.save()
        .then(([rows, fieldData]) => {
            response.setHeader('Set-Cookie', 'ultima_joya=' + mi_joya.clase + '; HttpOnly');
            response.redirect('/joyas');
        }).catch((error) => {
            console.log(error);
        });
};

exports.get_misjoyas = (request, response, next) => {
    console.log(request.cookies);
    console.log(request.cookies.ultima_joya);

    //Joya.fetchAll().then(([rows, fieldData]) => { 
        //console.log(fieldData);
        Joya.fetch(request.params.id_producto).then(([rows, fieldData]) => {
        response.render('misjoyas', {
            joyas: rows,
            ultima_joya: request.cookies.ultima_joya || '',
            username: request.session.username || '',
        });
    })
    .catch((error) => {
        console.log(error)
    });

};

exports.deleteJoya = async (req, res) => {
    const id_producto = req.params.id;
    try {
        await db.execute('CALL delete_joya(?)', [id_producto]);
        res.redirect('/misjoyas'); // Redirect back to the page displaying jewelry items
    } catch (error) {
        console.error("Error deleting joya:", error);
        res.status(500).send("An error occurred while deleting the joya.");
    }
};