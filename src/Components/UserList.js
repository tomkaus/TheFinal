import React from 'react';

// Define the UserList component
const UserList = ({ users, onDelete, onUpdate, selectedUser }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div className="user-container" key={user.id}>
          <h3>Student Info</h3>
          <p>Name: {user.name}</p>
          <p>Class Section: {user.jobTitle}</p>
          <p>School Name: {user.companyName}</p>
          <button onClick={() => onDelete(user.id)}>Delete</button>
          <button onClick={() => onUpdate(user)}>Edit</button>

          {selectedUser && selectedUser.id === user.id && (
            <userUpdateForm user={selectedUser} onUpdate={onUpdate} />
          )}
        </div>
      ))}
    </div>
  );
};

export default UserList;
