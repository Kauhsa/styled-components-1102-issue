import React, { Component } from 'react';
import AnotherThing from './AnotherThing';
import { StyleSheetManager } from 'styled-components';

class App extends Component {
  render() {
    return (
      <div>
        <StyleSheetManager target={document.head}>
          <AnotherThing>Why am I red</AnotherThing>
        </StyleSheetManager>
      </div>
    );
  }
}

export default App;
