import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Button } from 'react-bootstrap';


const TopPost = () => (


  <section>


    <Container fluid>

      {/* Desktop view with box on the article inside background image */}

      <Row className=" position-relative" style={{ backgroundSize: "cover", backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/pogs.jpg)`, height: "500px", }}>

        <Col md="6" lg='5' xl="4" className="d-none d-lg-block position-absolute d-flex flex-column justify-content-between align-items-center rounded-bottom p-1" style={{ backgroundColor: "#F6F5F5", top: "0", left: "50px", height: "90%", }}>
          <h1 className="fs-2 text-center my-3 fw-bold title-font">Les pogs le jeu phénomène des cours d'école.</h1>

          <Row className="fw-bold my-2 mx-1 w-100" style={{ fontSize: '0.5rem', }}>
            <Col className="col-2 ">joalemweb</Col>
            <Col className="col-2 text-start">05 avril 2022</Col>
            <Col className="col-8 text-end">12:00 (Temps de lecture : 2 min) </Col>
          </Row>


          <Row className="m-2 my-3 p-3 justify-content-center fs-6 title-font" style={{ textAlign: "justify" }}>
            <Col>Amet incididunt commodo sunt magna ea nulla. Ad eu esse fugiat qui sunt anim quis laborum non laborum veniam. Consequat laborum sint ex sunt. Velit laboris nisi mollit do fugiat sint tempor ut adipisicing labore est velit esse.</Col>
          </Row>

          <Row className="w-100 position-absolute bottom-0 text-center ">
            <Col>
              <Button as={Link} to="/lespogs" className="btn_read fw-bold btn-lg m-3 title-font" style={{ backgroundColor: "#F6F5F5", color: "black", borderRadius: "20px" }}>Lire l'article</Button>
            </Col>
          </Row>
        </Col>

      </Row>



      {/* View mobile with block text below image */}

      <Row className="d-block d-lg-none  ">
        <Col md="12" lg='12' className="d-flex flex-column justify-content-between align-items-center rounded-bottom p-1" style={{ backgroundColor: "#F6F5F5", top: "0", left: "50px", height: "90%", }}>
          <h1 className="fs-2 text-center my-3 fw-bold">Les pogs le jeu phénomène des cours d'école.</h1>

          <Row className="fw-bold my-2 mx-1 w-100" style={{ fontSize: '0.5rem', }}>
            <Col xs="2" sm="2" md="2">joalemweb</Col>
            <Col xs="3" sm="2" md="2" className="text-start">05 avril 2022</Col>
            <Col xs="7" sm="8" md="8" className="text-end">Temps de lecture : 2 min </Col>
          </Row>


          <Row className="m-2 my-3 w-75 justify-content-center fs-6" style={{ textAlign: "justify" }}>
            <Col>Amet incididunt commodo sunt magna ea nulla. Ad eu esse fugiat qui sunt anim quis laborum non laborum veniam. Consequat laborum sint ex sunt. Velit laboris nisi mollit do fugiat sint tempor ut adipisicing labore est velit esse.</Col>
          </Row>

          <Row>
            <Col>
              <Button className="btn_read fw-bold btn-lg m-3" style={{ backgroundColor: "#F6F5F5", color: "black", borderRadius: "20px" }}>Lire l'article</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    












    </Container>


  </section>
);

export default TopPost;