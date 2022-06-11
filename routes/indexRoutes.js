import express from "express";
import { paginaComentario,
        paginaInicio,
        paginaNosotros,
        paginaViajes,
        paginaDetalleViaje
} from '../controllers/paginasControllers.js';
import {guardarComentario} from '../controllers/comentariosController.js'
const router = express.Router();

router.get('/', paginaInicio );

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/comentarios', paginaComentario);

router.post('/comentarios', guardarComentario);

export default router;


