import React from 'react'
import {render} from 'react-dom';
import { createStore } from 'redux'
import Counter from './redux/counter.jsx'
import counter from './redux/reducers'

const store = createStore(counter);

const renderItem = () => {
  render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    document.querySelector('#app')
  );
};

const renderDom = () => {
  return <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />;
};

store.subscribe(renderItem);

export default renderDom;