import React from "react";

function About() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold">About Our Project</h2>
                    <p className="lead text-muted">
                        Elegant solutions with user experience in mind
                    </p>
                </div>

                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <div className="p-4 bg-white rounded shadow-sm h-100 about-card">
                            <i className="bi bi-lightning-charge-fill text-primary fs-1 mb-3"></i>
                            <h5 className="fw-bold mb-2">Fast Performance</h5>
                            <p className="text-muted">
                                Our platform is optimized for speed and efficiency.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="p-4 bg-white rounded shadow-sm h-100 about-card">
                            <i className="bi bi-phone-fill text-success fs-1 mb-3"></i>
                            <h5 className="fw-bold mb-2">Responsive Design</h5>
                            <p className="text-muted">
                                Works perfectly on mobile, tablet, and desktop devices.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="p-4 bg-white rounded shadow-sm h-100 about-card">
                            <i className="bi bi-shield-lock-fill text-danger fs-1 mb-3"></i>
                            <h5 className="fw-bold mb-2">Secure</h5>
                            <p className="text-muted">
                                Built with security best practices to protect user data.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .about-card {
          transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
        }
        .about-card:hover {
          transform: translateY(-10px);
          background-color: #e0f7fa !important;
          box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
        }
      `}</style>
        </section>
    );
}

export default About;
