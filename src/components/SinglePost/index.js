import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

import PropositionArticle from '../PopositionArticle';
import NotFound from '../NotFoundPage';

// Icons
import { ImBubble } from "react-icons/im"; //Icon Bubble for comments
import { BsFillHeartFill, BsFacebook, BsTwitter, BsInstagram, BsFillArrowLeftSquareFill } from 'react-icons/bs'; // Icon Hearth for like


const SinglePost = ({posts}) => {

  const params = useParams();
console.log(`singlepost : ${posts}`);
console.log(`singlepost params:`+ params);
console.log(params);

  const currentPost = posts.find((post) => post.attributes.Slug === params.slug);
console.log(currentPost);

  if (!currentPost){
    console.log(`je suis dans le currentpost dans singlePost : ${currentPost}`);
console.log(`singlepost : ${params}`);

    return <NotFound />
  }

return (
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
              <Col lg={7} className="text-start col-6">{currentPost.attributes.Author}</Col>
              <Col lg={2} className="text-end col-6">{currentPost.attributes.Published} </Col>
              <Col sm={12} lg={3} className="text-start ">Temps de lecture : {currentPost.attributes.Reading_time} min</Col>
            </Row>



            {/* ............................................................ */}
            {/* Post */}


            <Row className="flex-column align-items-center">
              <Col>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fs-3 fw-bold text-center mb-3 title-font">{currentPost.attributes.Title}</Card.Title>
                  <Card.Img className="p-2 rounded" variant="top" src={currentPost.attributes.image.data.attributes.formats.large.url} width="500" height="400" />


                  <div className="dropdown-divider"></div>

                  {/* Post Text */}
                  <Card.Text className="title-font">
                    {currentPost.attributes.Introduction}
                  </Card.Text>

                  <Card.Text className="title-font">
                  {currentPost.attributes.Article}
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
)}

export default SinglePost;