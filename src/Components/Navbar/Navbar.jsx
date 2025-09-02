
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg sticky-top">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-3" to="/">MyTourism</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link navbar-brand fs-5" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navbar-brand fs-5" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navbar-brand fs-5" to="/product">Product</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <style jsx="true">{`
        .navbar-link:hover {
          color: #ffc107 !important;
          transition: 0.3s;
        }
        .navbar-brand:hover {
          color: #ffc107 !important;
          transition: 0.3s;
        }
      `}</style>
        </nav>
    );
}

export default Navbar;
