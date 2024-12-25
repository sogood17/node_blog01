import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/Footer/Footer.jsx';
import ListsPage from '../pages/ListsPage.jsx';
import Category from '../pages/Category.jsx';
import Login from '../pages/Login.jsx';

const RootRouter = ()=> {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ListsPage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default RootRouter;