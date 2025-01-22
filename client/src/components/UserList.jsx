import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './UserList.css'; // Import the CSS file for styling
import { FaTrash } from 'react-icons/fa'; // Import the trash can icon

const UserList = ({ users, onDelete }) => {
    return (
        <div className="user-list">
            {users && users.length > 0 ? (
                users.map(user => (
                    <div key={user.id || user.correo} className="user-item">
                        {user.nombre ? (
                            <>
                                <span className="user-name">{user.nombre}</span>
                                <span className="user-email">{user.correo}</span>
                                <span className="user-age">{user.edad}</span>
                                <button className="delete-button" onClick={() => onDelete(user.correo)}>
                                    <FaTrash />
                                </button>
                            </>
                        ) : (
                            <p className="error-message">Error: User name is required</p>
                        )}
                    </div>
                ))
            ) : (
                <p className="no-users-message">No users available</p>
            )}
        </div>
    );
};

function UserListContainer() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/usuarios');
      setUsers(response.data);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (correo) => {
    try {
      await axios.delete(`http://localhost:3000/usuarios/${correo}`);
      setUsers(users.filter(user => user.correo !== correo));
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  return <UserList users={users} onDelete={handleDelete} />;
}

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            correo: PropTypes.string.isRequired,
            nombre: PropTypes.string,
            edad: PropTypes.number
        })
    ),
    onDelete: PropTypes.func.isRequired
};

export default UserListContainer;
