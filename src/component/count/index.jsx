import React, { Component } from 'react'

export default class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber;
  }
  decrement = () => {
    const { value } = this.selectNumber;
  }
  incrementIfodd = () => {
    const { value } = this.selectNumber;
  }
  incrementSycn = () => {
    const { value } = this.selectNumber;
  }
  render() {
    return (
      <div>
        <h1>总数为:</h1>
        <select ref={c => this.selectNumber = c}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfodd}>给奇数加一</button>&nbsp;
        <button onClick={this.incrementSycn}>异步添加</button>&nbsp;
      </div>
    )
  }
}
