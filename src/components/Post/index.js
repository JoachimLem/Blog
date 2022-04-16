import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';



// Icons
import { ImBubble } from "react-icons/im"; //Icon Bubble for comments
import { BsFillHeartFill } from 'react-icons/bs'; // Icon Hearth for like



const Post = ({currentItems}) => (
  <article>


{currentItems && currentItems.map((post) =>(
 <Card className="m-3 p-2 border-0" style={{ backgroundColor: "#F6F5F5" }}>

 {/* ............................................................ */}
 {/* infos Post */}
 <Row className="fw-bold" >
   <Col>{post}</Col>
   <Col className="text-end">05 avril 2022 / Temps de lecture : 2 min</Col>
 </Row>



 {/* ............................................................ */}
 {/* Post */}


 <Row className="flex-column-reverse flex-lg-row">
   {/* Post Text */}
   <Col className="col-lg-6 p-0 d-flex">
     <Card.Body className="d-flex flex-column justify-content-between">
       <Card.Title className="fs-3 fw-bold text-center mb-3">Alerte à Malibu : La série qui à révelé Pamela Anderson</Card.Title>
       <Card.Text>
         This is a wider card with supporting text below as a natural lead-in to
         additional content. This content is a little bit longer.
         additional content. This content is a little bit longer.
         additional content. This content is a little bit longer.
     
       </Card.Text>

       <Row>
         <Col className="col-8">
           <Button className="btn_read fw-bold btn-lg m-3" style={{ backgroundColor: "#F6F5F5", color: "black", borderRadius: "20px" }}>Lire l'article</Button>
         </Col>

         {/* Block for interaction with icons like & comments */}
         <Col className="col-4 d-flex align-items-center justify-content-end">
           <Row>
             <Col className="text-end">
               <ImBubble />
             </Col>
             <Col>
               <BsFillHeartFill />
             </Col>
           </Row>

         </Col>
       </Row>

     </Card.Body>

   </Col>
   {/* ............................................................ */}

   {/* Post image */}
   <Col className="col-lg-6">
     <Card.Img className="p-2 rounded" variant="top" src={`${process.env.PUBLIC_URL}/assets/images/baywatch.jpg`} width="100%" height="100%" />
   </Col>
 </Row>

</Card>
))}
   

  </article>
);


export default Post;