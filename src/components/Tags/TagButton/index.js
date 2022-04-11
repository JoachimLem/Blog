import React from 'react'
import { Button } from 'react-bootstrap';


const TagButton = ({name})=>(

  <Button className=" btn_read btn-lg m-1 fw-bold px-4 my-2" style={{ backgroundColor: "black", borderRadius: "20px", color:"white"  }} >{name}</Button>
);

export default TagButton;