import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header__container">
    <nav className="nav__container">
        <div className="nav__container--left">
      <Link to ="/">Violet's Blog</Link>
      </div>
      <div className="nav__container--right">
      <Link className="nav__text--right" to ="/category">Category</Link>
      <Link className="nav__text--right" to ="/login">Login</Link>
      </div>
    </nav>
    </div>
  )
}

export default Header;