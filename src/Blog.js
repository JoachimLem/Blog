import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css';

// Components
import Header from './components/Header';
import Posts from './components/Posts';
import SinglePost from "./components/SinglePost";
import Footer from "./components/Footer";




function Blog() {
  return (
    <div className="App">
    <Header />
    <Posts />
    <SinglePost />
    <Footer />
  
    </div>
  );
}

export default Blog;
