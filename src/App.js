import React from 'react';
import './App.css';
import StickyNotes from './components/sticky-notes/sticky-notes';

import DraggableNote from './components/draggable-note/draggable-note';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Sticky Notes</h2>

        <StickyNotes
          title={`Click here to move the note`}
          width={`400`}
          height={`250`}
          top={`150`}
          left={`350`}
          content={''}
        />
      </div>
    )
  }
}