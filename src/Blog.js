import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css';

// Components
import Header from './components/Header';
import Posts from './components/Posts';
import NotFoundPage from './components/NotFoundPage';




function Blog() {
  return (
    <div className="App">
    <Header />
    <Posts />
    <NotFoundPage />
    </div>
  );
}

export default Blog;
