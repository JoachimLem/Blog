import React from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

// Assets or Icons
import { BsSearch } from 'react-icons/bs';




const Header = () => (
  <header>
    <Navbar expand="lg" sticky="top" style={{ backgroundColor: '#F6F5F5'}}>
      <Container fluid className="justify-content-center">


        <Row className="align-items-center w-100">
          <Col xs='6' lg='2' >
            <Navbar.Brand href="#home">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/logo-black.png`}
                width="120"
                height="80"
                alt="Back To 90s logo"
              />
            </Navbar.Brand>
          </Col>

          {/* Title appear when the screen is more less large */}
          {/* <Col xs="6" className="text-center d-block d-lg-none"><h1 className="fw-bold"> Backto90s</h1></Col> */}

          <Col xs="6" lg='1' className="text-end" >
            <Navbar.Toggle aria-controls="navbar-nav" />
          </Col>



          <Col lg="6">
            <Navbar.Collapse id="navbar-nav">
              <Nav className="text-center" >
                <Nav.Link className="mx-2 fw-bold roboto" href="#home">Home</Nav.Link>
                <Nav.Link className="mx-2 fw-bold" href="#link">Style</Nav.Link>
                <Nav.Link className="mx-2 fw-bold" href="#link">Medias</Nav.Link>
                <Nav.Link className="mx-2 fw-bold" href="#link">Culture</Nav.Link>
                <Nav.Link className="mx-2 fw-bold" href="#link">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>






<Col lg='3'>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Recherche"
            className="me-2"
            aria-label="Search"
            style={{ borderRadius: '20px' }}
          />
          <Button style={{ backgroundColor: "rgba(40, 38, 38, 1)", borderRadius: "5px" }}><BsSearch /></Button>
        </Form>
</Col>
      </Container>
    </Navbar>
  </header>
)

export default Header;