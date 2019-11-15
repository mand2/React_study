import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('CounterStore') //index.js 에서 counter로 설정했기 때문에 counter로 불러온다
@observer
class Counter extends Component {
  render() {
    const { CounterStore } = this.props;
    return (
      <div>
        <h1>{CounterStore.number}</h1>
        <button onClick={CounterStore.increase}>+1</button>
        <button onClick={CounterStore.decrease}>-1</button>
      </div>
    );
  }
}


export default Counter;