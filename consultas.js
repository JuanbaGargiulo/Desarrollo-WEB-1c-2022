//Archivos de consultas en sql, exportando las funciones a routes.js
import { request } from "express";
import {conectarse,sql} from "./main.js";

//Consultas de conciertos
export const getConciertos = async (req,res)=>{
   const pool = await conectarse()
   const result = await pool.request().query('Select * from Conciertos')
   res.json(result.recordset)
}

export const createConcierto = async (req,res)=>{
    const {Nombre_Artista,Fecha,Locacion} = req.body //solicitud de datos para crear un concierto

    //mensaje de falta de datos
    if(Nombre_Artista == null ||Fecha == null || Locacion == null ){
        return res.status(400).json({msg:'Bad Request. Plase fill all fields' })
    }

    //insertar en sql los datos ingrasados en el body
    const pool = await conectarse()

    await pool.request()
    .input('Nombre',sql.VarChar,Nombre_Artista)
    .input('FechaConcierto',sql.Date,Fecha)
    .input('LocacionConcierto',sql.VarChar,Locacion)
    .query('Insert into Conciertos (Nombre_Artista, Fecha, Locacion) VALUES (@Nombre,@FechaConcierto,@LocacionConcierto)');
    //      VERBO DE ACCION                 COLUMNAS                                    VALORES DEL INPUT   
    


    res.json("Concierto creado")
}



export const deleteConcierto = async (req,res)=>{
    const {id} = req.params
    const pool = await conectarse()

    await pool.request()
    .input('id',id)
    .query('Delete from Conciertos where [Id_Concierto] = @id ');
    //      VERBO DE ACCION                 COLUMNAS                                    VALORES DEL INPUT   
    


    res.json("Concierto eliminado")
}



export const getConciertosByID = async (req,res)=>{
   const {id} = req.params

   const pool = await conectarse()
   const result = await pool.request()
   .input('id',id)
   .query('Select * from Conciertos where Id_Concierto = @id')
   
    res.json(result.recordset[0])
    
}


export const updateConciertos = async(req,res) => {
    const {Nombre_Artista,Fecha,Locacion} = req.body
    const {id} = req.params
    
    //Validacion de falta de datos
    if(Nombre_Artista == null ||Fecha == null || Locacion == null){
        return res.status(400).json({msg:'Bad Request. Plase fill all fields' })
    }

   const pool = await conectarse()

    await pool.request() 
    .input('Nombre',sql.VarChar,Nombre_Artista)
    .input('FechaConcierto',sql.Date,Fecha)
    .input('LocacionConcierto',sql.VarChar,Locacion)
    .input('id',id)
    .query('Update Conciertos set Nombre_Artista = @Nombre , Fecha = @FechaConcierto, Locacion = @LocacionConcierto where Id_Concierto = @id')
     
    res.json("se actualizo el producto")

}

//Consultas de entradas


export const createEntrada = async (req,res)=>{
    const {Nombre,Apellido,Sector} = req.body //solicitud de datos para crear un concierto
    const {id} = req.params

    //mensaje de falta de datos
    if(Nombre == null ||Apellido == null || Sector == null){
        return res.status(400).json({msg:'Bad Request. Plase fill all fields' })
    }

    //insertar en sql los datos ingrasados en el body
    const pool = await conectarse()

    await pool.request()
    .input('Nombre',sql.VarChar,Nombre)
    .input('Apellido',sql.VarChar,Apellido)
    .input('Sector',sql.VarChar,Sector)
    .input('id',id)
    .query('Insert into Entradas (Nombre, Apellido, Sector, Id_Concierto) VALUES (@Nombre,@Apellido,@Sector,@id)');
    //      VERBO DE ACCION                 COLUMNAS                                    VALORES DEL INPUT   
    
    await pool.request().execute('InsertarCampos') //Stored procedure 

   const result = await pool.request().query("select * from Concierto_Entradas where Id_Entrada in(select max(Id_Entrada) from Concierto_Entradas)") //Mostrar la entrada

   res.json(result.recordset[0])
}

