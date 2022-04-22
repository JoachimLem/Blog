import React from 'react';

//Tags Button
import TagButton from './TagButton';

//Utils
import { Row, Col } from 'react-bootstrap';



const tagsByDefault = ["Nouveautés", "Populaire"];

const Tags = ({ tags }) => (

  <section>
    <Row>
      {/* Row for Tags News & Popular  */}
      <Col className="text-center mb-5 mt-2 m-1 d-md-flex justify-content-md-end">
        {tagsByDefault.map((name) => (
          <TagButton key={name}
            name={name.toUpperCase()}
          />
        ))}
      </Col>
      {/* ............................ */}
    </Row>



    {/* Row for others tags */}


    <Row className="text-center rounded m-1 p-1 py- d-none d-lg-block" style={{ backgroundColor: "#F6F5F5" }}>
      <Col>


        {tags.map((tag) =>
          <TagButton key={tag.id}
            name={tag.attributes.Tag_name}
          />
        )}

      </Col>

    </Row>
  </section>
);



export default Tags;




