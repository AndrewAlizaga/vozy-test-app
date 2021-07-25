//Libs
const express = require('express')
const port = process.env.PORT || 8080;
const cors = require('cors')
require('dotenv').config();
const app = express();

//API CALL
const router = require('./routes/router');

//DB init
const connectDB = require('./DB/index');


app.use(cors());
app.use(express.json())
app.use('/api', router);

//Connect DB
connectDB();

app.get('/', (req, res)=> {return res.send("hellow world")})

app.listen(port, '0.0.0.0', (req, res) => {
    console.log('Alive & listening at port: '+port);
    
})

