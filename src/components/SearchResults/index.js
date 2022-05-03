import React from 'react';
import { useLocation } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Post from '../Post'


const SearchResults = ({ filteredPosts }) => {
  const { state } = useLocation();
  console.log(state);

  return (

    <section>
      <Container fluid className="mt-5 pt-5">

  <p>Nombre de résultat : {state.length}</p>



       {state.map((post) => {
        console.log(post);
        return (
          <Post key={post.id}
            {...post}
          />
        )
      }
      )}
 
      </Container>

    </section>
  )
}


export default SearchResults;