///////////////////////////////
// Mini Redux implementation //
///////////////////////////////
import React from 'react';
import {render} from 'react-dom';

// class Redux extends React.Component {
//   constructor(props) {
//     super(props);
//   }

// }

const initialState = {
  nextNoteId: 1,
  notes: {}
};

window.state = initialState;

const onAddNote = () => {
  const id = window.state.nextNoteId;
  window.state.notes[id] = {
    id,
    content: ''
  };
  window.state.nextNoteId++;
  renderApp();
};

const NoteApp = ({notes}) => (
  <div>
    <ul className="note-list">
    {
      Object.keys(notes).map(id => (
        // Obviously we should render something more interesting than the id.
        <li className="note-list-item" key={id}>{id}</li>
      ))
    }
    </ul>
    <button className="editor-button" onClick={onAddNote}>New Note</button>
  </div>
);

const renderDom = () => {
  return <NoteApp notes={window.state.notes}/>;
}

const renderApp = () => {
  render(
    <NoteApp notes={window.state.notes}/>,
    document.querySelector('#app')
  );
};

export default renderDom;