import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import {Row, Col } from 'react-bootstrap';

import Post from '../Post';




function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [posts,setPosts] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);


  // useEffect(() => {
  //   // Fetch items from another resources.
  //   fetchPostsData(setPosts)
  //     const endOffset = itemOffset + itemsPerPage;
  //     setCurrentItems(posts.slice(itemOffset, endOffset));
  //     setPageCount(Math.ceil(posts.length / itemsPerPage));
  //     setIsLoading(true);

  // }, [psts]);


  // useEffect(() => {
  //   const fetchPostsData = async () => {
  //     const result = await axios(
  //       'http://localhost:1337/api/posts?populate=*',
  //     );

  //     setPosts(result.data.data);
  //     const endOffset = itemOffset + itemsPerPage;
  //     setCurrentItems(posts.slice(itemOffset, endOffset));
  //     setPageCount(Math.ceil(posts.length / itemsPerPage));
  //   };

  //   fetchPostsData();
  // }, []);



  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;

    setItemOffset(newOffset);
  };

  return (
    <>
    <Row>
      <Col>
      <Post currentItems={currentItems} />  
      </Col>
    </Row>
    <Row>

      <Col className="d-flex justify-content-center">
      <ReactPaginate
        previousLabel="< précédent"
        nextLabel="suivant >"
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      />
      
      </Col>
    </Row>
    </>
  );
}

export default PaginatedItems;


