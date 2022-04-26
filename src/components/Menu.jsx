import React from 'react'

import { Navbar, Container, Nav } from 'react-bootstrap'

export const Menu = () => {
  return (
    <div>
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Deputados</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/rick">Rick and Morty</Nav.Link>
      <Nav.Link href="">Episode</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}
