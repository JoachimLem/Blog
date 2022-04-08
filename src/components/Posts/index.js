import React from 'react';
import TopPost from '../TopPost';
import Post from '../Post';
import { Container, Row, Col } from 'react-bootstrap';


const Posts = () => (

  <main>
    <Container fluid>
      {/* Hero Ban. This is a new post star */}
      <TopPost />
      {/* .................................................... */}


      {/* Posts Area */}
      <Row>

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
          <Row> Je suis les tgs populaire et nouveautés</Row>
          <Row>Je suis les tags</Row>
        </Col>
        {/* .................................................. */}

      </Row>
      {/* .................................................. */}


    </Container>


  </main>
)

export default Posts;
