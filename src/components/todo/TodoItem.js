import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export default class TodoItem extends Component {
  
  render() {
    const { title, id, completed } = this.props.todo;
    const CustomStyle = {textDecoration: completed ? "line-through" : "none"}

    return (
      <div>
        <InputGroup>
          <FormControl value={title} disabled style={{...InputStyle, ...CustomStyle}} />
          <InputGroup.Prepend>
            <Button
              style={buttonStyle}
              variant="outline-success"
              className="ml-1"
              onClick={this.props.handleComplete.bind(this, id)}
              disabled={completed ? true : false}
              
            >
              &#10003;
            </Button>
          </InputGroup.Prepend>
          <InputGroup.Prepend>
            <Button
              style={buttonStyle}
              variant="outline-danger"
              className="ml-1"
              onClick={this.props.handleDelete.bind(this, id)}
            >
              x
            </Button>
          </InputGroup.Prepend>
        </InputGroup>
        <hr style={hrStyle}/>
      </div>
    );
  }
}
const hrStyle = {
  maxWidth: '100%',
  margin: '2px auto',
  borderColor: '#3333',
  width: '97%'
}

const buttonStyle = {
  padding: "2px 14px",
  border: "0px",
  borderRadius: "100%"
};

const InputStyle = {
  backgroundColor: "#fff",
  borderColor: "#3333",
  borderRadius: "0px",
  borderLeft: "0px",
  borderRight: "0px",
  borderBottom: "0px",
  borderTop: "0px",
};
