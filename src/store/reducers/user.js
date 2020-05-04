
const user = (state = [], action) => {
  switch (action.type) {
  case 'SET_USER':
    return {
      name: action.name,
      loggedIn: action.loggedIn
    }

  case 'CLR_USER':
    return {
      name: '',
      loggedIn: false
    }

  default:
    return state;
  }  
}

export default user
