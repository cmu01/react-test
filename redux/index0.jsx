import React from 'react';
import {render} from 'react-dom';

const CREATE_NOTE = 'CREATE_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';

const initialState = {
  nextNoteId: 1,
  notes: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOTE: {
      const id = state.nextNoteId;
      const newNote = {
        id,
        content: ''
      };
      return {
        state: Object.assign({}, state),
        nextNoteId: id + 1,
        notes: {
          notes: Object.assign({}, state.notes),
          [id]: newNote
        }
      };
    }
    case UPDATE_NOTE: {
      const {id, content} = action;
      const editedNote = {
        notes: Object.assign({}, state.notes[id]),
        content
      };
      return {
        state: Object.assign({}, state),
        notes: {
          notes: Object.assign({}, state.notes),
          [id]: editedNote
        }
      };
    }
    default:
      return state;
  }
};

const state0 = reducer(undefined, {
  type: CREATE_NOTE
});

const state1  = reducer(state0, {
  type: UPDATE_NOTE,
  id: 1,
  content: 'Hello, world!'
});

// ReactDOM.render(
//   <pre>{JSON.stringify(state1, null, 2)}</pre>,
//   document.getElementById('root')
// );

const renderDom = () => {
  return <pre>{JSON.stringify(state1, null, 2)}</pre>;
}

export default renderDom;