const initialState = {
    users: [],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return { ...state, users: [...state.users, action.payload] };
      case 'DELETE_USER':
        return { ...state, users: state.users.filter(user => user.id !== action.payload) };
      case 'SET_USERS':
        return { ...state, users: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  