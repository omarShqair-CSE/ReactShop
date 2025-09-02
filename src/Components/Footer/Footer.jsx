import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-primary text-white pt-5 pb-4">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-warning">MyShop</h5>
                        <p>Premium products at affordable prices. Experience the best shopping with us!</p>
                    </div>

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold">Useful Links</h5>
                        <p>
                            <Link to="/" className="text-white text-decoration-none footer-link">Home</Link>
                        </p>
                        <p>
                            <Link to="/about" className="text-white text-decoration-none footer-link">About Us</Link>
                        </p>
                        <p>
                            <Link to="/contact" className="text-white text-decoration-none footer-link">Contact</Link>
                        </p>
                        <p>
                            <Link to="/help" className="text-white text-decoration-none footer-link">Help</Link>
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold">Contact</h5>
                        <p><i className="fas fa-home me-2"></i> Palestine, Nablus</p>
                        <p><i className="fas fa-envelope me-2"></i> Omar@Shqair.com</p>
                        <p><i className="fas fa-phone me-2"></i> +012 345 6789</p>
                    </div>
                </div>

                <hr className="mb-4 border-light" />

                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p>© 2025 MyShop. All Rights Reserved.</p>
                    </div>

                    <div className="col-md-5 col-lg-4">
                        <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <Link to="/" className="text-white fs-5 me-2 footer-icon"><FaFacebook /></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/" className="text-white fs-5 me-2 footer-icon"><FaTwitter /></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/" className="text-white fs-5 me-2 footer-icon"><FaInstagram /></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/" className="text-white fs-5 footer-icon"><FaLinkedin /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx="true">{`
        .footer-link:hover {
          color: #ffc107 !important;
          text-decoration: underline;
          transition: 0.3s;
        }
        .footer-icon:hover {
          color: #ffc107 !important;
          transform: scale(1.2);
          transition: 0.3s;
        }
      `}</style>
        </footer>
    );
}

export default Footer;
