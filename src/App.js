import React, { Component } from 'react';

import TestProvider from './components/TestProvider';
import Test from './components/Test';
import InjectData from './components/InjectData';

class App extends Component {
  render() {
    return (
      <TestProvider>
        <InjectData />
        <Test />
      </TestProvider>
    );
  }
}

export default App;
