import { Link } from "react-router-dom";
import "./header.css";
function PagesHeader() {
  return (
    <div className="headerWrapper">
      <div className="logo">
        <Link to="/">
          <img src="/logoImg.svg" alt="logo img" />
        </Link>
      </div>
      <div className="navBar">
        <nav>
          <ul>
            <li>
              <Link to="/">Bosh sahifa</Link>
            </li>
            <li>
              <Link to="/about">Xizmatlar</Link>
            </li>
            <li>
              <Link to="/portifolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/team">Jamoa</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Kontaktlar</Link>
            </li>
          </ul>
        </nav>
        <button>+998 90 921 37 11</button>
      </div>
    </div>
  );
}

export default PagesHeader;
