import React from "react";
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";
import './App.css'

export default class App extends React.Component {
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '敲代码', done: true },
      { id: '003', name: '睡觉', done: false },
      { id: '004', name: '逛街', done: true },
    ]
  }
  addTodo = (todoObj) => {
    const todos = this.state.todos
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos })
  };
  changeTodo = (id,done) => {

  }
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return todo.id != id
    });
    console.log(newTodos)
    this.setState({ todos: newTodos })
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <List todos={todos} deleteTodo={this.deleteTodo} changeTodo={this.changeTodo}></List>
          <Footer todos={todos}></Footer>
        </div>
      </div>
    )
  }
}