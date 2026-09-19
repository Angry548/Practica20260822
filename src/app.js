const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const estudianteRoutes = require('./routes/estudiante.routes');
const cursoRoutes = require('./routes/curso.routes');
const usuarioRoutes = require('./routes/usuario.routes');

const app = express();

// Lista de orígenes permitidos
const allowedOrigins = [
  'https://angry548.github.io',
  'https://practica20260912-theta.vercel.app',
  'http://localhost:5173',
  'http://localhost:3000'
];

if (process.env.CLIENT_URL) {
  allowedOrigins.push(process.env.CLIENT_URL);
}

// Configuración de CORS
const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-use-cookie']
};

app.use(cors(corsOptions)); // Aplicar CORS globalmente

app.use(express.json());
app.use(cookieParser());

// Registro de Rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/estudiantes', estudianteRoutes);
app.use('/api/cursos', cursoRoutes);

module.exports = app;