import React, { useState, useRef } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

// DOTENV variables
const service = process.env.REACT_APP_EMAILJS_SERVICE;
const template = process.env.REACT_APP_EMAILJS_TEMPLATE;
const user = process.env.REACT_APP_EMAILJS_USER;



const Contact = () => {

  const [isSuccess, setIsSucess] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useRef();


  const onSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(service, template, form.current, user)
      .then((result) => {
        console.log(result.text);
        setIsSucess(true);
        setIsError(false);
      
        setTimeout(() => {
          window.location.href = '/';
        }, 1500);

      }, (error) => {
        console.log(error.text);
        setIsError(true);
        console.log(error);
      });
  };



  return (
    <Container className="d-flex flex-column align-items-center title-font" style={{ minHeight: "85vh" }}>


      <Row className="text-center">
        <h1 className="font-weight-bold my-lg-5 mb-2" >Contact</h1>
        <p className="mb-lg-5 fs-lg-4 ">Merci de nous laisser un petit message, nous ferons tous pour vous répondre dans les meilleurs délais.</p>
      </Row>




      <Row className="w-75">
        <Form ref={form} onSubmit={onSubmit}>
          <Form.Group controlId="form.FirstName">
            <Row className="mb-lg-4 mb-2">
              <Col className="col-lg-6 col-12" >
                <Form.Label>Prénom</Form.Label>
              </Col>

              <Col className="col-lg-6">
                <Form.Control name="firstName" type="text" placeholder="ex : John" />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group controlId="form.LastName">
            <Row className="mb-lg-4 mb-2">
              <Col className="col-lg-6 col-12" >
                <Form.Label>Nom</Form.Label>
              </Col>

              <Col className="col-lg-6">
                <Form.Control name="lastName" type="text" placeholder="ex : Doe" />
              </Col>
            </Row>
          </Form.Group>


          <Form.Group controlId="form.Email">
            <Row className="mb-lg-4 mb-2">
              <Col className="col-lg-6 col-12">
                <Form.Label>Email </Form.Label>
              </Col>
              <Col className="col-lg-6 col-12">
                <Form.Control name="email" type="email" placeholder="ex : nom@example.com" />
              </Col>
            </Row>
          </Form.Group>


          <Form.Group controlId="form.Textarea">
            <Row className="mb-lg-5 mb-3" >
              <Col className="col-lg-6 col-12">

                <Form.Label>Commentaires</Form.Label>
              </Col>
              <Col className="col-lg-6 col-12">
                <Form.Control name="message" as="textarea" rows={4} />
              </Col>
            </Row>


            <Row>
              <Col className="text-center mb-lg-5 mb-3">
                <Button type="submit" className="btn-lg" style={{ backgroundColor: "black" }}>Envoyer</Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Row>
      <Row>

        {isSuccess ?
          <Alert variant="success" className="text-center">message envoyé avec succes</Alert>
          :
          <p></p>
        }


        {isError ?
          <Alert variant="danger" className="text-center">Erreur, veuillez rééssayer ultérieurement</Alert>
          :
          <p></p>
        }

      </Row>

    </Container>

  );

};

export default Contact;
