import React from 'react';

//Tags Button
import TagButton from './TagButton';

//Utils
import {Row, Col} from 'react-bootstrap';



const tagsByDefault = ["Nouveautés", "Populaire"];
const tagsPopular = ["dorothé", "DBZ", "beverly hills", " minikeums", "dance machine", "ophélie winter", "pamela Anderson","dodo", "DB", "cdm98", " gala", "hit machine", "jogging", "secteur ä"];

const Tags = () => (

  <section>
<Row>
  {/* Row for Tags News & Popular  */}
  <Col className="text-center mb-5 mt-2 m-1 d-md-flex justify-content-md-end">
  {tagsByDefault.map((name) => (
    <TagButton key={name} 
    name={name.toUpperCase() }
    />
  ))}
  </Col>
  {/* ............................ */}
</Row>



  {/* Row for others tags */}
 

  <Row className="text-center rounded m-1 p-1 py- d-none d-lg-block" style={{ backgroundColor:"#F6F5F5"}}>
    <Col>
    {tagsPopular.map((popular) => (
      <TagButton key={popular}
      name={popular.toLowerCase()}
      />
    ))} 
    </Col>
 
  </Row>
  </section>
);



export default Tags;




