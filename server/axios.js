import axios from 'axios';

// const baseUrl = 'http://localhost:4040/users/';
axios.defaults.baseURL = 'http://localhost:4040';

axios.defaults.headers.common['Authorization'] = 'Token';

axios.defaults.headers.get['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// GET

const fetchUsers = () => {
  return axios.get('/users').then(console.log).catch(console.error);
};

// POST

const addUser = user => {
  // Exmpl
  const body = user;
  return axios.post('/users', body).then(console.table).catch(console.warn);
};

// DELETE

const deleteUser = userId => {
  return axios
    .delete('/users' + userId)
    .then(console.table)
    .catch(console.warn);
};

// PATCH

const updateUser = (userId, update) => {
  return axios
    .patch('/users' + userId, update)
    .then(console.table)
    .catch(console.warn);
};
