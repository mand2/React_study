import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('counter') //index.js 에서 counter로 설정했기 때문에 counter로 불러온다
@observer
class Counter extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>{counter.number}</h1>
        <button onClick={counter.increase}>+1</button>
        <button onClick={counter.decrease}>-1</button>
      </div>
    );
  }
}


export default Counter;