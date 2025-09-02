import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const registerForm = (values) => {
        console.log(values)
    }
    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="col-md-6 col-lg-5">
                <div className="card shadow-lg border-0 rounded-3">
                    <div className="card-body p-4">
                        <h3 className="text-center mb-4">Create an Account</h3>
                        <form onSubmit={handleSubmit(registerForm)}>
                            <div className="form-group mb-3">
                                <label htmlFor="userName">User Name</label>
                                <input
                                    {...register('name',
                                        { required: 'please enter your name' })}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter name"
                                />
                                {errors.name ? <p className="text-danger">{errors.name.message}</p> : null}
                            </div>


                            <div className="form-group mb-3">
                                <label htmlFor="userEmail">Email address</label>
                                <input
                                    {...register('email',
                                        { required: 'please enter your email' })}
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                />
                                {errors.email ? <p className="text-danger">
                                    {/* {console.log(errors.email.message)} */}
                                    {(errors.email.message)}
                                </p> : null}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="userPassword">Password</label>
                                <input
                                    {...register('password', {
                                        required: 'please enter your password',
                                        minLength: {
                                            value: 3,
                                            message: 'Min 2 is required'
                                        }
                                    })}
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                />
                                {errors.password ? <p className="text-danger">{errors.password.message}</p> : null}

                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Register
                            </button>
                            <p className="text-center mt-3 mb-0">
                                Already have an account
                                <Link to="/login" className="text-decoration-none">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
