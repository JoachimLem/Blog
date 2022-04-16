import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css';

// Components
import Header from './components/Header';
import Posts from './components/Posts';
import Footer from './components/Footer';
import Contact from './components/Contact';




function Blog() {
  return (
    <div className="App">
    <Header />
    <Posts />  
<Contact />
    <Footer />
  
    </div>
  );
}

export default Blog;
