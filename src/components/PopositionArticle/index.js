import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const PropositionArticle = () => {

  return (
    <Container fluid className="d-flex justify-content-center pt-3 d-none d-lg-block mh-25 overflow-auto">


<Row>

<Card className="border-0 rounded">
    <Card.Title className="text-center fw-bold pt-2">Beverly Hills 90210</Card.Title>
  <Card.Body>
    <Row>
      <Col>
  <Card.Img className="p-2 rounded" variant="top" src={`${process.env.PUBLIC_URL}/assets/images/baywatch.jpg`} width="100%" height="100%" />
      </Col>

      <Col>
    <Card.Text style= {{fontSize:"0.75rem"}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      the card's content.
      the card's content.
      
    </Card.Text>    
      </Col>
    </Row>
  </Card.Body>
    <Button className="btn_read fw-bold  m-2 mb-3" style={{ backgroundColor: "#F6F5F5", color: "black", borderRadius: "20px" }}>Lire l'article</Button>
</Card>


</Row>
    </Container>
  )
};

export default PropositionArticle;



