import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import logo from "../../white_bkgrnd_logo.png";
function Layout() {
  const [page, setPage] = useState('home');

  const handleSelect = (eventKey) => {
    setPage(eventKey);
    console.log(eventKey);
  }

  return (
    <div>
      <Navbar bg="light" variant="light" >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="small main logo" width="30" height="30" className="d-inline-block align-top" /> {' '}
            Reflections Cleaning
          </Navbar.Brand>
          <Nav className="me-auto" align="center" activeKey={page} onSelect={handleSelect}>
            <Nav.Link as={Link} to="/" eventKey="Home">Home</Nav.Link>
            <Nav.Link as={Link} to="contact" eventKey="Contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="why-us" eventKey="Why">Why Us</Nav.Link>
            <Nav.Link as={Link} to="services" eventKey="Services">Services</Nav.Link>
            <Nav.Link as={Link} to="prev-work*">Work We've Done</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='body-spacer'>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
