export default (state = {count: 0}, action) => {
  console.log(state, action);
  const count = state.count;

  switch (action.type) {
    case 'INCREMENT':
      return { count: count + 1 };
    case 'DECREMENT':
      return { count: count - 1 };
    default:
      return state;
  }
}