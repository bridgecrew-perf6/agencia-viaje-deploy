import express from 'express';
import router from './routes/indexRoutes.js';
import db from './config/db.js'
import dotenv from 'dotenv'

dotenv.config({path: 'variables.env'});


const app = express();

//conectar la SDb
db.authenticate()
.then( ()=> console.log('base de datos conectada'))
.catch(error => console.log(error))

const host = process.env.HOST || '0.0.0.0';
// la variable PORT la asigna HEROKU
const port =  process.env.PORT || 4000;

//levantamos el servidor
app.listen(port, host,()=>{
    console.log(`servidor escuchando en el puerto: ${port}`);
});

//obtener año actual
app.use( (req, res, next)=>{
    const year = new Date().getFullYear();
    res.locals.unaVariable = year;
    res.locals.nombreWeb = 'Agencia de Viajes';

    return next();
});

//body parser - leer datos formulario
app.use(express.urlencoded({extended: true}))

//habilitar pug
app.set('view engine','pug');
//archivos publicos
app.use(express.static('public'));
//router
app.use('/', router);

