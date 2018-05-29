import React from 'react';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';
import { loadState, saveState } from 'localStorage';
import { createStore } from 'redux';
import Counter from './redux/counter.jsx';
import counter from './redux/reducers1';

// const persistedState = loadState();
const store = createStore(counter);
const mapStateToProps = (state) => {
  return {
    value: state.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: 'INCREMENT' })
  };
};

const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

const renderItem = () => {
  render(
    <Provider store = {store}>
     <App/>
    </Provider>,
    document.querySelector('#app')
  );
};

const renderDom = () => {
  return <Provider store = {store}>
    <App/>
 </Provider>;
};

// store.subscribe(renderItem);

export default renderDom;