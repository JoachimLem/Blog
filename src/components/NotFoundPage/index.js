import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

//Icons
import { TiArrowBack } from "react-icons/ti";

const NotFound = () => {

  return (
    <Container fluid>
      <section style={{ backgroundSize: "cover", backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/404.jpg)`, height: "100vh", }}>
        <Row className="h-100">

          <Row>
          <Col style={{color:"white"}}>
          <TiArrowBack size="2em" />
          <span style={{verticalAlign: "bottom"}} >Retour à l'Accueil</span>
          </Col>
          </Row>

          <Row>
            <Col className="d-flex flex-column justify-content-end align-items-center" style={{color:"white"}}>
            <h1 className="fw-bold fs-1">Oupss erreur d'aiguillage, Marty</h1>
            <h2 className="fw-bold">Error 404</h2>
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/logo-white.png`}
                width="500"
                height="400"
                alt="Back To 90s logo"
              />

            </Col>
            lalalalal
          </Row>
        </Row>

      </section>
    </Container>
  )
}

export default NotFound;
