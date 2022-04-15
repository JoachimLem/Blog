import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
 const year =new Date().getFullYear();
 console.log(year);

  return (

  <footer>
    <Container fluid style={{backgroundColor:"#F6F5F5"}}>
    <Row className="flex-column align-items-center justify-content-center">
      <Col className=" text-center text-lg-start col">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo-black.png`}
          width="120"
          height="80"
          alt="Back To 90s logo"
        />
      </Col>

      <Col className="text-center d-lg-flex justify-content-lg-center align-items-lg-center">Copyright©{year}</Col>
      <Col className="text-center d-lg-flex justify-content-lg-end align-items-lg-center">joalemweb@gmail.com</Col>
    </Row>

    </Container>
  </footer>
)};


export default Footer;
