import React from 'react';
import {Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css';

// Components
import Header from './components/Header';
import Posts from './components/Posts';
import Footer from './components/Footer';
import Contact from './components/Contact';
import NotFound from './components/NotFoundPage';





function Blog() {
  return (
    <div className="App">
    <Header />



    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>



    
    <Footer />
   




    </div>
  );
}

export default Blog;
