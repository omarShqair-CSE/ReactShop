import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
            <div className="card shadow-lg p-4" style={{ width: "25rem", borderRadius: "1rem" }}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Login</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="rememberMe" />
                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    <hr />
                    <p className="text-center mb-0">
                        Don’t have an account? <Link to="/register" className="text-decoration-none">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;
