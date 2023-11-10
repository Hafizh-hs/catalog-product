import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark" style={{ backgroundColor: "#696969" }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Product Catalog
        </Link>
      </div>
    </nav>
  );
}
