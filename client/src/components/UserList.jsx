import PropTypes from 'prop-types';

function UserList({ users }) {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </ul>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired
};

export default UserList;
