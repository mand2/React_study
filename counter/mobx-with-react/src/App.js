import React, { Component } from 'react';
import Counter from './components/Counter'; //경로 변경
import SuperMarket from './components/SuperMarket';

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <hr />
        <SuperMarket />
      </div>
    );
  }
}

export default App;