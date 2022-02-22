import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/stilettos">Stilettos</Link>
      </h1>
      <button className="New-button">
        <Link to="/stilettos/new">New Stiletto</Link>
      </button>
    </nav>
  );
}

export default NavBar;