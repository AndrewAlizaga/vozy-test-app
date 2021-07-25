//Libs
const express = require('express')
const port = process.env.PORT || 8080;
const cors = require('cors')
const dotenv = require('dotenv').config();

const app = express();

//API CALL
const router = require('./routes/router');

//DB init
const connectDB = require('./DB/index');


app.use(cors());
app.use(express.json())
app.use('/api', router);

app.get('/', (req, res)=> {return res.send("<h1>Hola!</h1><br><h2>Puedes encontrar la documentación de uso en esta ruta /api/documentation o cliquear acá para ir directamente a la documentación <a target='_blank' href='https://documenter.getpostman.com/view/3678249/TzsZs8gL'>https://documenter.getpostman.com/view/3678249/TzsZs8gL</a></h2>")})

const server = app.listen(port, '0.0.0.0', (req, res) => {
    console.log('Alive & listening at port: '+port);
    
    //Connect DB
    connectDB();
    
})

module.exports = server