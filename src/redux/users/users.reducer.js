const INITIAL_STATE = {
  users: [],
  user: null,
  token: null,
  error: null,
};

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ALL_USERS":
      return { ...state, users: [...action.payload.users] };
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "ERROR":
      return {
        ...state,
        user: null,
        token: null,
        error: action.payload.error,
      };
    case "LOGOUT":
        return{
            ...state,
            user: null,
            token: null
        }  
    default:
      return state;
  }
};
