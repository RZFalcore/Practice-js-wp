// GET
const fetchUsers = () => {
  return fetch('http://localhost:4040/users')
    .then(response => response.json())
    .then(console.table)
    .catch(console.warn);
};

// POST

const addUser = user => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  return fetch('http://localhost:4040/users', options)
    .then(response => response.json())
    .then(console.table)
    .catch(console.warn);
};

// DELETE

const deleteUser = userId => {
  const url = `http://localhost:4040/users/${userId}`;
  const options = {
    method: 'DELETE',
  };

  return fetch(url, options)
    .then(response => response.json())
    .then(console.table)
    .catch(console.warn);
};

// PATCH

const updateUser = (userId, update) => {
  const url = `http://localhost:4040/users/${userId}`;
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(url, options)
    .then(response => response.json())
    .then(console.table)
    .catch(console.warn);
};
