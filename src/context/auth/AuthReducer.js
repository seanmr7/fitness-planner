const authReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      }
    default:
      return state
  }
}

export default authReducer
