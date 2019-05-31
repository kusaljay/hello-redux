import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import ButtonGroup from './components/ButtonGroup';
import { store } from './store';

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld tech={store.getState().tech} />
        <ButtonGroup technologies={['React', 'React-redux', 'Elm']} />
      </div>
    );
  }
}

export default App;
