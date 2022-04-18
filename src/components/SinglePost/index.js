import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import PropositionArticle from '../PopositionArticle';

// Icons
import { ImBubble } from "react-icons/im"; //Icon Bubble for comments
import { BsFillHeartFill, BsFacebook, BsTwitter, BsInstagram, BsFillArrowLeftSquareFill } from 'react-icons/bs'; // Icon Hearth for like


const SinglePost = () => (

  <section>
    <Container fluid>

      <Row>
        <Row className="justify-content-start d-lg-none">
          <Col>
            <BsFillArrowLeftSquareFill size="2em" />
          </Col>
        </Row>


        <Col lg={9} className="overflow-auto">
          <Card className="m-3 p-2 border-0 text-center" >

            {/* ............................................................ */}
            {/* infos Post */}
            <Row className="fw-bold h-100" >
              <Col lg={7} className="text-start col-6">joalemweb</Col>
              <Col lg={2} className="text-end col-6">05 avril 2022 </Col>
              <Col sm={12} lg={3} className="text-start ">Temps de lecture : 2 min</Col>
            </Row>



            {/* ............................................................ */}
            {/* Post */}


            <Row className="flex-column align-items-center">
              <Col>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fs-3 fw-bold text-center mb-3 title-font">Alerte à Malibu : La série qui à révelé Pamela Anderson</Card.Title>
                  <Card.Img className="p-2 rounded" variant="top" src={`${process.env.PUBLIC_URL}/assets/images/baywatch.jpg`} width="500" height="400" />


                  <div className="dropdown-divider"></div>

                  {/* Post Text */}
                  <Card.Text className="title-font">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    additional content. This content is a little bit longer.
                    additional content. This content is a little bit longer.
                  </Card.Text>

                  <Card.Text className="title-font">
                    Non incididunt proident id ut irure aliquip dolore elit. Adipisicing excepteur eu tempor eiusmod id tempor ex id eu. In proident in est nisi fugiat cillum. Culpa in duis officia do. Laborum excepteur elit commodo velit incididunt sit incididunt.
                    Non incididunt proident id ut irure aliquip dolore elit. Adipisicing excepteur eu tempor eiusmod id tempor ex id eu. In proident in est nisi fugiat cillum. Culpa in duis officia do. Laborum excepteur elit commodo velit incididunt sit incididunt.
                    Non incididunt proident id ut irure aliquip dolore elit. Adipisicing excepteur eu tempor eiusmod id tempor ex id eu. In proident in est nisi fugiat cillum. Culpa in duis officia do. Laborum excepteur elit commodo velit incididunt sit incididunt.
                    Non incididunt proident id ut irure aliquip dolore elit. Adipisicing excepteur eu tempor eiusmod id tempor ex id eu. In proident in est nisi fugiat cillum. Culpa in duis officia do. Laborum excepteur elit commodo velit incididunt sit incididunt.
                    Non incididunt proident id ut irure aliquip dolore elit. Adipisicing excepteur eu tempor eiusmod id tempor ex id eu. In proident in est nisi fugiat cillum. Culpa in duis officia do. Laborum excepteur elit commodo velit incididunt sit incididunt.
                    Non incididunt proident id ut irure aliquip dolore elit. Adipisicing excepteur eu tempor eiusmod id tempor ex id eu. In proident in est nisi fugiat cillum. Culpa in duis officia do. Laborum excepteur elit commodo velit incididunt sit incididunt.
                    Non incididunt proident id ut irure aliquip dolore elit. Adipisicing excepteur eu tempor eiusmod id tempor ex id eu. In proident in est nisi fugiat cillum. Culpa in duis officia do. Laborum excepteur elit commodo velit incididunt sit incididunt.
                  </Card.Text>


                  <div className="dropdown-lg-divider"></div>

                  {/* Block for interaction with icons like & comments */}
                  <Row className="flex-row flex-lg-columns">
                    <Col className="text-start">
                      <span className="d-none d-lg-inline title-font"> Partagez si vous aimez : </span>
                      <span className="p-1"> <BsTwitter size="2em" /></span>
                      <span className="p-1"><BsInstagram size="2em" /></span>
                      <span className="p-1"><BsFacebook size="2em" /></span>
                    </Col>
                    <Col className="text-end ">
                      <span className="p-1"><ImBubble size="2em" /></span>
                      <span className="p-1"> <BsFillHeartFill size="2em" /></span>
                    </Col>
                  </Row>



                  <Row>

                  </Row>

                </Card.Body>

              </Col>

            </Row>

          </Card>
        </Col>



        <Col className="d-none d-lg-block p-0  overflow-auto" style={{ backgroundColor: "#F6F5F5", height: "100%" }}>
          <h6 className="text-center mt-3 fw-bold ">Articles suceptible de vous intérresser</h6>
          <PropositionArticle />
          <PropositionArticle />
          <PropositionArticle />
          <PropositionArticle />
          <PropositionArticle />

        </Col>




      </Row>


      <div className="dropdown-divider"></div>
    </Container>

  </section>
)

export default SinglePost;