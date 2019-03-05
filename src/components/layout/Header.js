import React, { Component } from "react";
import CustomNavbar from "./CustomNavbar";
import { Jumbotron, Container } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <div>
        <CustomNavbar />
        <Jumbotron fluid className="bg-white">
          <Container>
            <h1 className="display-4">{this.props.page.title}</h1>
            <p className="lead">{this.props.page.desc}</p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
