const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();
const app = express();
const prisma = new PrismaClient();
const PUERTO = process.env.PUERTO || 3264;

 // Estos son los middlewares
app.use(cors()); // este es para la conexión con el frontend
app.use(express.json()); // este permite recibir datos en formato JSON 

/* ---------------------------------------------------------------------------------------
    Rutas para Proyectos
*/ 
app.get('/api/proyectos', async (req, res) => {
    try {
        const proyectos = await prisma.proyecto.findMany();
        res.status(200).json(proyectos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los proyectos' });
    }
});

app.post('/api/proyectos', async (req, res) => {
    try {
        const { nombre, rutEmpresa, ubicacion, fechaInicio, duracionMeses, estado } = req.body;
        const nuevoProyecto = await prisma.proyecto.create({
            data: { nombre, rutEmpresa, ubicacion, fechaInicio: new Date(fechaInicio), duracionMeses, estado }
        });
        res.status(201).json(nuevoProyecto); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el proyecto' });
    }
});

app.put('/api/proyectos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, rutEmpresa, ubicacion, estado } = req.body;
        const proyectoActualizado = await prisma.proyecto.update({
            where: { id: parseInt(id) },
            data: { nombre, rutEmpresa, ubicacion, estado }
        });
        res.status(200).json(proyectoActualizado);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: 'Proyecto no encontrado' });
    }
});

app.delete('/api/proyectos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.proyecto.delete({ where: { id: parseInt(id) } });
        res.status(200).json({ mensaje: 'Proyecto eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: 'Proyecto no encontrado o ya eliminado' });
    }
});

/* ---------------------------------------------------------------------------------------
    Rutas para Noticias
*/ 
app.get('/api/noticias', async(req, res) =>{
    try {
        const noticias = await prisma.noticia.findMany({ orderBy: { fechaPublicacion: 'desc' } });
        res.status(200).json(noticias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las noticias' });
    }
});

app.post('/api/noticias', async(req, res) =>{
    try {
        const { titulo, contenido, nombrePeriodista } = req.body;
        const nuevaNoticia = await prisma.noticia.create({ data: { titulo, contenido, nombrePeriodista } });
        res.status(201).json(nuevaNoticia);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la noticia' });
    }
});

app.put('/api/noticias/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const { titulo, contenido, nombrePeriodista } = req.body;
        const noticiaActualizada = await prisma.noticia.update({
            where: { id: parseInt(id) },
            data: { titulo, contenido, nombrePeriodista }
        });
        res.status(200).json(noticiaActualizada);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: 'Noticia no encontrada' });
    }
});

app.delete('/api/noticias/:id', async(req, res) => {
    try {
        const { id } = req.params;
        await prisma.noticia.delete({ where: { id: parseInt(id) } });
        res.status(200).json({ mensaje: 'Noticia eliminada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: 'Noticia no encontrada' });
    }
});

/* ---------------------------------------------------------------------------------------
    Rutas para Actividades
*/ 
app.get('/api/actividades', async(req, res) =>{
    try {
        const actividades = await prisma.actividad.findMany();
        res.status(200).json(actividades);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las actividades' });
    }
});

app.post('/api/actividades', async(req, res) =>{
    try {
        const { titulo, descripcion, ubicacion, fecha, cuposTotales } = req.body;
        const nuevaActividad = await prisma.actividad.create({
            data: { titulo, descripcion, ubicacion, fecha: new Date(fecha), cuposTotales }
        });
        res.status(201).json(nuevaActividad);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la actividad' });
    }
});

app.put('/api/actividades/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const { titulo, descripcion, ubicacion, fecha, cuposTotales, cuposOcupados } = req.body;
        const actividadActualizada = await prisma.actividad.update({
            where: { id: parseInt(id) },
            data: { titulo, descripcion, ubicacion, fecha: new Date(fecha), cuposTotales, cuposOcupados }
        });
        res.status(200).json(actividadActualizada);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: 'Actividad no encontrada' });
    }
});

app.delete('/api/actividades/:id', async(req, res) => {
    try {
        const { id } = req.params;
        await prisma.actividad.delete({ where: { id: parseInt(id) } });
        res.status(200).json({ mensaje: 'Actividad eliminada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: 'Actividad no encontrada' });
    }
});

/* ---------------------------------------------------------------------------------------
    Rutas para Opiniones
*/ 
app.get('/api/opiniones', async(req, res) =>{
    try {
        const opiniones = await prisma.opinion.findMany({ include: { proyecto: true } });
        res.status(200).json(opiniones);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las opiniones' });
    }
});

app.post('/api/opiniones', async(req, res) =>{
    try {
        const { calificacion, comentario, proyectoId, usuarioRut } = req.body;
        const nuevaOpinion = await prisma.opinion.create({
            data: { calificacion, comentario, proyectoId, usuarioRut }
        });
        res.status(201).json(nuevaOpinion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la opinión' });
    }
});

app.put('/api/opiniones/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const { calificacion, comentario } = req.body;
        const opinionActualizada = await prisma.opinion.update({
            where: { id: parseInt(id) },
            data: { calificacion, comentario }
        });
        res.status(200).json(opinionActualizada);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: 'Opinión no encontrada' });
    }
});

app.delete('/api/opiniones/:id', async(req, res) => {
    try {
        const { id } = req.params;
        await prisma.opinion.delete({ where: { id: parseInt(id) } });
        res.status(200).json({ mensaje: 'Opinión eliminada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: 'Opinión no encontrada' });
    }
});

/* ---------------------------------------------------------------------------------------
    Rutas para Servicios (este va a ser webeado de armar)
*/ 
app.post('/api/servicios/recoleccion', async(req, res) => {
    try {
        const { tipoBasura, ubicacion, motivo, usuarioRut } = req.body;
        const nuevaRecoleccion = await prisma.recoleccionDomicilio.create({
            data: { tipoBasura, ubicacion, motivo, usuarioRut }
        });
        res.status(201).json(nuevaRecoleccion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al solicitar recolección' });
    }
});

app.get('/api/servicios/zonas-verdes', async(req, res) => {
    try {
        const zonas = await prisma.zonaVerde.findMany();
        res.status(200).json(zonas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las zonas verdes' });
    }
});

/* -------------------------------------------------------
    Iniciar el servidor
 */
app.listen(PUERTO, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PUERTO}`);
});