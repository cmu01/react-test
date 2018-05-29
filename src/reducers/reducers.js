export default (state = {}, action) => {
  switch (action.type) {
    case 'updateName':
      state.userName = action.value;
      return state;
    case 'updatePassWord':
      state.passWord = action.value;
      return state;
    case 'saved':
      console.log('saved', state)
      return state;
    default:
      return state
  }
}