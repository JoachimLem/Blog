import React from 'react';


import { TwitterTimelineEmbed } from 'react-twitter-embed';


//Contents for PostPage
import TopPost from '../TopPost';
import Tags from '../Tags';
import Post from '../Post';


//Utils
import { Container, Row, Col } from 'react-bootstrap';


const Posts = ({posts}) =>{
  console.log(`je suis dans le composant Post : ${posts}`);

  

  return(
  
    <main>
      <Container fluid className="mt-5 pt-5">
        {/* Hero Ban. This is a new post star */}
        <TopPost />
        {/* .................................................... */}
  
  
        {/* Posts Area */}
        <Row className="flex-lg-row flex-column-reverse ">
  
          {/* List of Posts */}
          <Col lg="8">
  
        {posts.map((post)=>{
          console.log(post);

          return(
          <Post key={post.id} 
          id={post.id}
          {...post}
          />)

})}
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
} 


export default Posts;
