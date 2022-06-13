//Main de la aplicacion

import express from 'express';
import mssql from 'mssql';
const sql = mssql
import rutasConciertos from './routes.js' //Router de routes.js
export {sql}

//Datos de la base sql
const dbsettings = {
    user: "Juan",
    password: "12345678",
    server: "localhost",
    database: "API",
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
      },
};

const app = express() //constante para la aplicacion
app.set('port',1411);

//servidor corriendo
app.listen(app.get('port'),()=>{
    console.log('server running on port',app.get('port'))
})

//Conectarse a sql
export async function conectarse(){
    const conn = sql.connect(dbsettings); 
    return conn
}
conectarse()

//middlewares para aceptar archivos json
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Rutas, endpoint
app.use(rutasConciertos)







