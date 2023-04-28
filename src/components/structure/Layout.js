import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import logo from "../../images/ring.png";
import { Phone, Email } from '../../icons/Icons';


function Layout() {
  const [page, setPage] = useState('home');

  const handleSelect = (eventKey) => {
    setPage(eventKey);
    console.log(eventKey);
  }

  function checkActive(key) {
    if(key === page) {
      return {color: "teal", fontWeight: "500"}
    }
  }

  return (
    <div>
      <Navbar bg="light" variant="light" >
        <Container align="center">
          <Navbar.Brand as={Link} to="/reflections_cleaning/">
            <img src={logo} alt="small main logo" width="30" height="30" className="d-inline-block align-top" /> {' '}
            Reflections Cleaning
          </Navbar.Brand>
          <Nav className="me-auto" align="center" activeKey={page} onSelect={handleSelect}>
            <Nav.Link as={Link} to="/reflections_cleaning/" eventKey="Home" style={checkActive("Home")}>Home</Nav.Link>
            <Nav.Link as={Link} to="services" eventKey="Services" style={checkActive("Services")}>Services</Nav.Link>
            <Nav.Link as={Link} to="about-us" eventKey="About" style={checkActive("About")}>About Us</Nav.Link>
            <Nav.Link as={Link} to="prev-work" eventKey="Prev" style={checkActive("Prev")}>Work We've Done</Nav.Link>
            <Navbar.Text><Phone /></Navbar.Text>
            <Navbar.Text>262-227-6007</Navbar.Text>
            <Navbar.Text><Email /></Navbar.Text>
            <Navbar.Text>Nrobson1978@gmail.com</Navbar.Text>
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
