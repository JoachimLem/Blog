import { position } from 'dom-helpers';
import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';


const TopPost = () => (


  <section>


    <Container className="bg-img" fluid style={{ backgroundSize: "cover", backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/pogs.jpg)`, height: "500px", position: "relative", }}>

      <article className="d-flex flex-column justify-content-between align-items-center rounded-bottom p-1" style={{ backgroundColor: "#F6F5F5", position: "absolute", top: "0", left: "50px", width: "500px", height: "90%", }}>
        <h1 className="fs-2 text-center my-3 fw-bold">Les pogs le jeu phénomène des cours d'école.</h1>

        <Row className="fw-bold my-2 mx-1 w-100" style={{ fontSize: '0.5rem', }}>
          <Col className="col-2 ">joalemweb</Col>
          <Col className="col-2 text-start">05 avril 2022</Col>
          <Col className="col-8 text-end">12:00 (Temps de lecture : 2 min) </Col>
        </Row>


        <Row className="m-2 my-3 w-75 justify-content-center" style={{ textAlign: "justify" }}>
          <Col>Amet incididunt commodo sunt magna ea nulla. Ad eu esse fugiat qui sunt anim quis laborum non laborum veniam. Consequat laborum sint ex sunt. Velit laboris nisi mollit do fugiat sint tempor ut adipisicing labore est velit esse.</Col>
        </Row>

        <Row>
          <Col>
            <Button className="btn_read fw-bold btn-lg m-3" style={{ backgroundColor: "#F6F5F5", color: "black", borderRadius: "20px" }}>Lire l'article</Button>
          </Col>
        </Row>
      </article>



    </Container>


  </section>
);

export default TopPost;