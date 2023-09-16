import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
        <Navbar.Brand>Books Store</Navbar.Brand>
        </Container>
    </Navbar>
  );
}


export default Header