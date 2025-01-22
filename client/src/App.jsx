import { useState, useEffect } from 'react';
import UserForm from './components/UserForm';  // Asegúrate de usar ./components
import UserListContainer from './components/UserList';  // Asegúrate de usar ./components

function App() {
  const [users, setUsers] = useState([]);
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
        setUsers(validUsers);
      })
      .catch(error => setError(error.message));
  }, []);

  useEffect(() => {
    console.log('Lista de usuarios:', users);
  }, [users]);

  const handleUserRegistered = (newUser) => {
    console.log('New user to register:', newUser); // Add logging to debug
    if (newUser.name) {
      fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        return fetch('http://localhost:3000/usuarios');
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const validUsers = data.filter(user => user.name);
        setUsers(validUsers);
      })
      .catch(error => setError(error.message));
    } else {
      setError('User name is required');
    }
  };

  return (
    <div>
      <h1>Registro de Usuarios</h1>
      {error && <p>Error: {error}</p>}
      <UserForm onUserRegistered={handleUserRegistered} />
      <UserListContainer users={users} />
    </div>
  );
}

export default App;
