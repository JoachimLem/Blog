import React from 'react';
import { useLocation } from 'react-router-dom';
import Post from '../Post'


const SearchResults = ({ filteredPosts }) => {
  const { state } = useLocation();
  console.log(state);

  return (

    <section>


      {state.map((post) => {
        console.log(post);
        return (
          <Post key={post.id}
            {...post}
          />
        )
      }


      )}


    </section>
  )
}


export default SearchResults;