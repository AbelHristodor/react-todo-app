import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class AddTodo extends Component {
  state = {
    title: ""
  };

  handleChange = e => this.setState({ title: [e.target.value] });
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit} style={FormStyle}>
        <Form.Control
          type="text"
          placeholder="New todo"
          onChange={this.handleChange}
          value={this.state.title}
        />
      </Form>
    );
  }
}

const FormStyle = {
  marginBottom: "2px"
};
