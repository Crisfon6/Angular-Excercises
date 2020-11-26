const express =require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();

const {mongoose} = require('./database');
///SETINGS
app.set('port',process.env.PORT || 3000  );

// MIDDLEWARES
//morgan permite ver las peticiones 
app.use(morgan('dev'));
//es para que entienda que lo que recibira sera un json
app.use(express.json());
//Le indicamos que server puede trabajar con este 
app.use(cors({origin:'http://localhost:4200'}))

// ROUTES
app.use('/api/employees',require('./routes/employees.routes'))

//STARTING SERVER
app.listen(app.get('port'),()=>{
    console.log("SERVER RUN IN PORT ",app.get('port'));
    
})