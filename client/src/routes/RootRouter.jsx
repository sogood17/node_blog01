import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/Footer/Footer.jsx';
import ListsPage from '../pages/ListsPage.jsx';
import CreatePostPage from "../pages/CreatePostPage.jsx"
import Category from '../pages/Category.jsx';
import Login from '../pages/Login.jsx';
import PostDetailPage from '../pages/PostDetailPage.jsx';

const RootRouter = ()=> {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ListsPage />} />
        <Route path="/:id" element={<PostDetailPage />} />
        <Route path="/createpost" element={<CreatePostPage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default RootRouter;