import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css';

// Components
import Header from './components/Header';
import Posts from './components/Posts';
import NotFoundPage from './components/NotFoundPage';
import SinglePost from "./components/SinglePost";




function Blog() {
  return (
    <div className="App">
    <Header />
    <Posts />
    <SinglePost />
    <NotFoundPage />
    </div>
  );
}

export default Blog;
