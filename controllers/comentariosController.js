import { Comentario } from '../models/Comentario.js'

const guardarComentario =  async (req, res)=>{
    const {nombre, correo, comentario} = req.body;
    //console.log(req.body)

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'nombre vacio'});
    }
    if(correo.trim() === ''){
        errores.push({mensaje: 'correo vacio'});
    }
    if(comentario.trim() === ''){
        errores.push({mensaje: 'comentario vacio'});
    }
    if(errores.length > 0 ){
        const comentarios = await Comentario.findAll();

        res.render('comentarios', {
            pagina: 'comentarios',
            errores: errores,
            nombre,
            correo,
            comentario,
            comentarios
        })
    }else{
        //almacenar en DB
        try {
            await Comentario.create({
                nombre,
                correo,
                comentario
            })
            res.redirect('/comentarios')
        } catch (error) {
            console.log(error)
        }
    }
};


export {
    guardarComentario
};