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
let nextId = 1; // Variable para generar IDs únicos

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
  const usuario = { id: nextId++, nombre, correo, edad };
  usuarios.push(usuario);

  // Respuesta exitosa
  res.status(201).json({ mensaje: 'Usuario registrado exitosamente', usuario });
});

// Endpoint GET para listar los usuarios
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// Endpoint GET para obtener un usuario por correo
app.get('/usuarios/:correo', (req, res) => {
  const { correo } = req.params;
  const usuario = usuarios.find(u => u.correo === correo);
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(usuario);
});

// Endpoint PUT para actualizar un usuario por correo
app.put('/usuarios/:correo', (req, res) => {
  const { correo } = req.params;
  const { nombre, edad } = req.body;

  const usuario = usuarios.find(u => u.correo === correo);
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  if (nombre) usuario.nombre = nombre;
  if (edad) {
    if (isNaN(edad) || edad <= 0) {
      return res.status(400).json({ error: 'La edad debe ser un número positivo' });
    }
    usuario.edad = edad;
  }

  res.json({ mensaje: 'Usuario actualizado exitosamente', usuario });
});

// Endpoint DELETE para eliminar un usuario por correo
app.delete('/usuarios/:correo', (req, res) => {
  const { correo } = req.params;
  const index = usuarios.findIndex(u => u.correo === correo);
  if (index === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  usuarios.splice(index, 1);
  res.json({ mensaje: 'Usuario eliminado exitosamente' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
