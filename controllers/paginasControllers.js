import{ Viaje} from '../models/Viaje.js';
import { Comentario } from '../models/Comentario.js';


const paginaInicio = async (req, res)=>{

    try {
        const viajes = await Viaje.findAll({limit: 3});
        const comentarios = await Comentario.findAll({limit: 3});

        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes,
            comentarios
        });
    } catch (error) {
        console.log(error)
    }
   
};
/* 
try {
        const comentarios = await Comentario.findAll();
        res.render('comentarios',{
            pagina: 'comentarios',
            comentarios
        });
    } catch (error) {
        console.log(error)
    }
*/
const paginaNosotros =(req, res)=>{
    res.render('nosotros',{
        pagina: 'nosotros'
    });
};

const paginaViajes = async(req, res)=>{
    const viajes = await Viaje.findAll();
    res.render('viajes',{
        pagina: 'Proximos viajes',
        viajes: viajes
    });
};
    
const paginaComentario = async (req, res)=>{
    try {
        const comentarios = await Comentario.findAll();
        res.render('comentarios',{
            pagina: 'comentarios',
            comentarios
        });
    } catch (error) {
        console.log(error)
    }
};

const paginaDetalleViaje = async (req, res)=>{
    const {slug} = req.params;
    try{
        const viaje = await Viaje.findOne({ where: { slug } });
        res.render('viaje-detail',{
            pagina: 'Informacion Viaje',
            viaje: viaje
        })
    }catch (error){
        console.log(error)
    }
    console.log(req.params.viaje)
};

export{
    paginaInicio,
    paginaComentario,
    paginaViajes,
    paginaNosotros,
    paginaDetalleViaje,
};
    