import React, { Component } from "react";
import Header from "../layout/Header";
import { Container } from "react-bootstrap";

export default class About extends Component {
  info = {
    about: {
      title: "About Page",
      desc: "This is the about page"
    }
  };
  render() {
    return (
      <div>
        <Header page={this.info.about} />
        <Container>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            assumenda maxime qui harum hic nesciunt atque veritatis a et
            deleniti beatae excepturi dignissimos,consectetur praesentium
            eligendi quam modi quaerat facere.
          </p>
        </Container>
      </div>
    );
  }
}
