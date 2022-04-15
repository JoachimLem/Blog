import React from 'react';
import { Container,Row, Col, Card } from 'react-bootstrap';

// Icons
import { ImBubble } from "react-icons/im"; //Icon Bubble for comments
import { BsFillHeartFill, BsFacebook, BsTwitter, BsInstagram, BsFillArrowLeftSquareFill} from 'react-icons/bs'; // Icon Hearth for like


const SinglePost = () => (

  <section>
    <Container fluid>

      <Row>
        <Row className="justify-content-start d-lg-none">
          <Col>
          <BsFillArrowLeftSquareFill size="2em" />
          </Col>
        </Row>


        <Col lg={9}>
        <Card className="m-3 p-2 border-0 text-center" >

{/* ............................................................ */}
{/* infos Post */}
<Row className="fw-bold" >
  <Col lg={7} className="text-start col-6">joalemweb</Col>
  <Col lg={2} className="text-end col-6">05 avril 2022 </Col>
  <Col sm={12} lg={3}  className="text-start ">Temps de lecture : 2 min</Col>
</Row>



{/* ............................................................ */}
{/* Post */}


<Row className="flex-column align-items-center">
  {/* Post Text */}
  <Col>
    <Card.Body className="d-flex flex-column justify-content-between">
      <Card.Title className="fs-3 fw-bold text-center mb-3">Alerte à Malibu : La série qui à révelé Pamela Anderson</Card.Title>
    <Card.Img className="p-2 rounded" variant="top" src={`${process.env.PUBLIC_URL}/assets/images/baywatch.jpg`} width="500" height="400" />

      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
        additional content. This content is a little bit longer.
        additional content. This content is a little bit longer.
      </Card.Text>

      <Card.Text>
      <img style={{float:"right",borderRadius:"5px"}} src={`${process.env.PUBLIC_URL}/assets/images/baywatch.jpg`} width="200" height="160" alt="thumbnail" className="d-none d-lg-block" />
        Non incididunt proident id ut irure aliquip dolore elit. Adipisicing excepteur eu tempor eiusmod id tempor ex id eu. In proident in est nisi fugiat cillum. Culpa in duis officia do. Laborum excepteur elit commodo velit incididunt sit incididunt.
        Non incididunt proident id ut irure aliquip dolore elit. Adipisicing excepteur eu tempor eiusmod id tempor ex id eu. In proident in est nisi fugiat cillum. Culpa in duis officia do. Laborum excepteur elit commodo velit incididunt sit incididunt.
        Non incididunt proident id ut irure aliquip dolore elit. Adipisicing excepteur eu tempor eiusmod id tempor ex id eu. In proident in est nisi fugiat cillum. Culpa in duis officia do. Laborum excepteur elit commodo velit incididunt sit incididunt.
        Non incididunt proident id ut irure aliquip dolore elit. Adipisicing excepteur eu tempor eiusmod id tempor ex id eu. In proident in est nisi fugiat cillum. Culpa in duis officia do. Laborum excepteur elit commodo velit incididunt sit incididunt.
        Non incididunt proident id ut irure aliquip dolore elit. Adipisicing excepteur eu tempor eiusmod id tempor ex id eu. In proident in est nisi fugiat cillum. Culpa in duis officia do. Laborum excepteur elit commodo velit incididunt sit incididunt.
        Non incididunt proident id ut irure aliquip dolore elit. Adipisicing excepteur eu tempor eiusmod id tempor ex id eu. In proident in est nisi fugiat cillum. Culpa in duis officia do. Laborum excepteur elit commodo velit incididunt sit incididunt.
        Non incididunt proident id ut irure aliquip dolore elit. Adipisicing excepteur eu tempor eiusmod id tempor ex id eu. In proident in est nisi fugiat cillum. Culpa in duis officia do. Laborum excepteur elit commodo velit incididunt sit incididunt.
      </Card.Text>
        

        {/* Block for interaction with icons like & comments */}
          <Row className="flex-row flex-lg-columns">
            <Col  className="text-start">
           <span className="d-none d-lg-inline"> Partagez si vous aimez : </span>
            <span className="p-1"> <BsTwitter size="2em" /></span>
            <span className="p-1"><BsInstagram size="2em" /></span>
            <span className="p-1"><BsFacebook size="2em"/></span>
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
  {/* ............................................................ */}

  {/* Post image */}

</Row>

</Card>
        </Col>



        <Col className="d-none d-lg-block"> Articles intérressant</Col>




      </Row>

  

    </Container>

  </section>
)

export default SinglePost;