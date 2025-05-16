export const addUser = (user) => ({
    type: 'ADD_USER',
    payload: user,
  });
  
  export const deleteUser = (id) => ({
    type: 'DELETE_USER',
    payload: id,
  });
  
  export const setUsers = (users) => ({
    type: 'SET_USERS',
    payload: users,
  });
  
  export const fetchUsers = () => ({
    type: 'FETCH_USERS',
  });
  