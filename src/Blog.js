import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Header from './components/Header';
import TopPost from './components/TopPost';




function Blog() {
  return (
    <div className="App">
    <Header />
    <TopPost />
    </div>
  );
}

export default Blog;
