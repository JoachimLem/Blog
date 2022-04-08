import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css';

// Components
import Header from './components/Header';
import Posts from './components/Posts';




function Blog() {
  return (
    <div className="App">
    <Header />
    <Posts />
    </div>
  );
}

export default Blog;
