import {Link} from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to ="/">Violet's Blog</Link>
      <Link to ="/category">Category</Link>
      <Link to ="/login">Login</Link>
    </nav>
  )
}

export default Header;