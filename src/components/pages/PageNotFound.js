import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <Container className="text-center my-2">
      <h1 className="display-4">404 Page Not Found</h1>
      <p className="lead">The page you are trying to access does not exist</p>
      <Link to="/">Go back {"<<"}</Link>
    </Container>
  )
}
