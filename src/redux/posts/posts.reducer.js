const INICIAL_STATE = {
  posts: [],
  filteredPosts: [],
  userPosts: [],
  error: null,
};

export const postsReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return { ...state, posts: [...action.payload.posts] };
    case "NEW_POST":
      return { ...state, posts: [action.payload.post, ...state.posts] };
    case "POSTS_USER":
      return { ...state, userPosts: [...action.payload.userPosts] };
    case "DELETE_POST":
      return { ...state, posts: [...action.payload.posts] };
    case "UPDATE_POST":
      return { ...state, posts: [...action.payload.posts] };
    case "FILTER_POSTS":
      return { ...state, filteredPosts: [...action.payload.posts] };
    default:
      return state;
  }
};
