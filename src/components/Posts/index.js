import React from 'react';

//Contents for PostPage
import TopPost from '../TopPost';
import Post from '../Post';
import Tags from '../Tags';


//Utils
import { Container, Row, Col } from 'react-bootstrap';


const Posts = () => (

  <main>
    <Container fluid>
      {/* Hero Ban. This is a new post star */}
      <TopPost />
      {/* .................................................... */}


      {/* Posts Area */}
      <Row className="flex-lg-row flex-column-reverse ">

        {/* List of Posts */}
        <Col lg="8">
      <Post />
      <Post />
      <Post />
      <Post />
        </Col>
        {/* .................................................. */}


        {/* Area for Tags Components */}
        <Col className="col 4">
          <Tags />
        </Col>
        {/* .................................................. */}

      </Row>
      {/* .................................................. */}


    </Container>


  </main>
)

export default Posts;
