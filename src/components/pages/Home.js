import React, { Component } from "react";
import Todos from "../todo/Todos";
import Header from "../layout/Header";
import AddTodo from "../todo/AddTodo";
import axios from "axios";
import { Container } from "react-bootstrap";

export default class Home extends Component {
  state = {
    todos: []
  };

  info = {
    home: {
      title: "Todo List App",
      desc: "This is a simple Todo app made in React, using JSON placeholder's api."
    },
  }
  
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }))
      .catch(err => alert(`Internal Server Error: ${err}`));
  }

  handleComplete = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          todo.completed = todo.id === id ? !todo.completed : todo.completed;
          return todo;
        })
      ]
    });
  };

  handleDelete = id => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res =>
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
      )
      .catch(err => alert(`Internal Server Error: ${err}`));
  };

  addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [res.data, ...this.state.todos] }))
      .catch(err => alert(`Internal Server Error: ${err}`));
  };

  render() {
    return (
      <div>
        <Header page={this.info.home} />
        <Container>
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            handleComplete={this.handleComplete}
            handleDelete={this.handleDelete}
          />
        </Container>
      </div>
    );
  }
}
