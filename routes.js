//Archivos de rutas, importando las consultas de sql del archivo consultas.js

import { Router } from "express";
import { createConcierto,deleteConcierto, getConciertosByID, getConciertos, updateConciertos, createEntrada} from'./consultas.js'

const router = Router()

//Endpoints Conciertos

router.get('/conciertos',getConciertos) // traer
router.get('/conciertos/:id',getConciertosByID) //buscar 1 concierto por ID

router.post('/conciertos',createConcierto) //crear 

router.delete('/conciertos/:id',deleteConcierto) //eliminar

router.put('/conciertos/:id',updateConciertos) //Actualizar

//Endpoints Entradas

router.post('/conciertos/entradas/:id',createEntrada)




export default router
