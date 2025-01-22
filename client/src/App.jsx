import { useState, useEffect } from 'react';
import UserForm from './components/UserForm';  // Asegúrate de usar ./components
import UserList from './components/UserList';  // Asegúrate de usar ./components

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/usuarios')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Datos recibidos del servidor:', data);
        const validUsers = data.filter(user => user.name);
        setUsuarios(validUsers);
      })
      .catch(error => setError(error.message));
  }, []);

  useEffect(() => {
    console.log('Lista de usuarios:', usuarios);
  }, [usuarios]);

  const handleUserRegistered = (newUser) => {
    if (newUser.name) {
      setUsuarios([...usuarios, newUser]);
    } else {
      setError('User name is required');
    }
  };

  return (
    <div>
      <h1>Registro de Usuarios</h1>
      {error && <p>Error: {error}</p>}
      <UserForm onUserRegistered={handleUserRegistered} />
      <UserList users={usuarios} />
    </div>
  );
}

export default App;
