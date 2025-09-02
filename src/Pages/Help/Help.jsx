import React from "react";

function Help() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold">Need Help?</h2>
                    <p className="lead text-muted">
                        We are here to assist you with any questions or issues
                    </p>
                </div>

                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <div className="p-4 bg-white rounded shadow-sm h-100 help-card">
                            <i className="bi bi-chat-dots-fill text-primary fs-1 mb-3"></i>
                            <h5 className="fw-bold mb-2">Live Chat</h5>
                            <p className="text-muted">
                                Chat with our support team in real-time for immediate assistance.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="p-4 bg-white rounded shadow-sm h-100 help-card">
                            <i className="bi bi-envelope-fill text-success fs-1 mb-3"></i>
                            <h5 className="fw-bold mb-2">Email Support</h5>
                            <p className="text-muted">
                                Send us an email and we will get back to you within 24 hours.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="p-4 bg-white rounded shadow-sm h-100 help-card">
                            <i className="bi bi-question-circle-fill text-danger fs-1 mb-3"></i>
                            <h5 className="fw-bold mb-2">FAQ</h5>
                            <p className="text-muted">
                                Check our Frequently Asked Questions for quick answers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx="true" >{`
        .help-card {
          transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
        }
        .help-card:hover {
          transform: translateY(-10px);
          background-color: #fff3e0 !important;
          box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
        }
      `}</style>
        </section>
    );
}

export default Help;
