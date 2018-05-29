import { createStore } from 'redux';

const store = createStore();

store.dispatch({
  type: 'add_todo',
  payload: 'learn redux'
});

store.getState = () => {};

store.subscribe(() => {
  console.log(store.getState());
});

return store;