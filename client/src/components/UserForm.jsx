import  { useState } from 'react';

// eslint-disable-next-line react/prop-types
function UserForm({ onUserRegistered }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { nombre, correo, edad: parseInt(edad) };

    try {
      const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (response.ok) {
        onUserRegistered(data.usuario);
        setNombre('');
        setCorreo('');
        setEdad('');
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        required
      />
      <button type="submit">Registrar Usuario</button>
    </form>
  );
}

export default UserForm;
