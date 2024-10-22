// LoginLogout.js (Reducer)
const initialState = {
    user: null, // Initial state
  };
  
  const loginLogoutReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload, // Set user on login
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null, // Clear user on logout
        };
      default:
        return state;
    }
  };
  
  export default loginLogoutReducer;
  