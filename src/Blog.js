import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css';

// Components
import Header from './components/Header';
import Posts from './components/Posts';
import Footer from './components/Footer';
import Contact from './components/Contact';
import NotFound from './components/NotFoundPage';





const getPostsByCategory = (posts, category) => {
  console.log(posts);
  if (category.category_route === '/') {
    return posts;
  }

  return posts.filter((p) => p.attributes.category.data.attributes.category_name === category.category_name);
};



function Blog() {

  // State
  const [categoriesState, setCategoriesState] = useState([]);
  const [postsState, setPostsState] = useState([]);

  const loadCategories = () => {
    axios.get(`http://localhost:1337/api/categories`)
      .then((response) => {
        setCategoriesState(response.data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const loadPosts = () => {
    axios.get(`http://localhost:1337/api/posts?populate=*`)
      .then((response) => {
        setPostsState(response.data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  };




  // Fetch Data Categories
  useEffect(() => {
    loadCategories();
    loadPosts();
  }, []);










  return (
    <div className="App">
      <Header categories={categoriesState} />


      <Routes>

        {
          categoriesState.map(
            (category) => {
              if (category.attributes.category_route === "/contact") {
                return (<Route
                  path={category.attributes.category_route}
                  key={category.attributes.category_route}
                  element={<Contact />} />)
              };
              return (<Route
                key={category.attributes.category_route}
                path={category.attributes.category_route}
                element={<Posts posts={getPostsByCategory(postsState, category.attributes)} />} />)

            })}





        <Route path="*" element={<NotFound />} />
      </Routes>




      <Footer />





    </div>
  );
}

export default Blog;
