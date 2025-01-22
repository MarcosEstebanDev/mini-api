const express = require('express');
const app = express();
const port = 3000;

// Middleware to enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Array en memoria para almacenar los usuarios
let usuarios = [];

// Endpoint POST para registrar un usuario
app.post('/usuarios', (req, res) => {
  const { nombre, correo, edad } = req.body;

  // Validación de datos
  if (!nombre || !correo || !edad) {
    return res.status(400).json({ error: 'Nombre, correo y edad son obligatorios' });
  }

  const correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!correoRegex.test(correo)) {
    return res.status(400).json({ error: 'El correo debe tener un formato válido' });
  }

  if (isNaN(edad) || edad <= 0) {
    return res.status(400).json({ error: 'La edad debe ser un número positivo' });
  }

  // Crear el usuario y agregarlo al array
  const usuario = { nombre, correo, edad };
  usuarios.push(usuario);

  // Respuesta exitosa
  res.status(201).json({ mensaje: 'Usuario registrado exitosamente', usuario });
});

// Endpoint GET para listar los usuarios
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
