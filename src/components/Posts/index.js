import React from 'react';


import { TwitterTimelineEmbed } from 'react-twitter-embed';


//Contents for PostPage
import TopPost from '../TopPost';
import PaginatedItems from '../Pagination';
import Tags from '../Tags';


//Utils
import { Container, Row, Col } from 'react-bootstrap';


const Posts = () => (

  <main>
    <Container fluid className="mt-5 pt-5">
      {/* Hero Ban. This is a new post star */}
      <TopPost />
      {/* .................................................... */}


      {/* Posts Area */}
      <Row className="flex-lg-row flex-column-reverse ">

        {/* List of Posts */}
        <Col lg="8">
      <PaginatedItems itemsPerPage={5} />
        </Col>
        {/* .................................................. */}


        {/* Area for Tags Components */}
        <Col className="col 4">


          <Row>

            <Tags />

          </Row>

          <Row className="d-none d-lg-block">
            <Col>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="Backto90sOff"
                options={{ height: 1400}}
              />
            </Col>
          </Row>
        </Col>
        {/* .................................................. */}

      </Row>
      {/* .................................................. */}


    </Container>


  </main>
)

export default Posts;
