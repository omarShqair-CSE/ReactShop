import React from 'react'
import { useForm } from 'react-hook-form'
import './Contact.css'

function Contact() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "onchange" })

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-lg border-0 rounded-3">
                        <div className="card-body p-4">
                            <h3 className="text-center mb-4 text-primary">Contact Us</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        {...register('name', { required: 'Name is required', minLength: { value: 3, message: 'Minimum 3 characters' } })}
                                        placeholder="Enter your name"
                                    />
                                    {errors.name ? <p className="text-danger mt-1">{errors.name.message}</p> : null}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                                        placeholder="Enter your email"
                                    />
                                    {errors.email ? <p className="text-danger mt-1">{errors.email.message}</p> : null}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows="4"
                                        {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Minimum 10 characters' } })}
                                        placeholder="Your message..."
                                    ></textarea>
                                    {errors.message ? <p className="text-danger mt-1">{errors.message.message}</p> : null}
                                </div>

                                <button type="submit" className="btn btn-primary w-100 shadow-sm">Send Message</button>
                            </form>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <p className="mb-1"><strong>Email:</strong> info@myshop.com</p>
                        <p className="mb-1"><strong>Phone:</strong> +972 597 572 927</p>
                        <p><strong>Address:</strong> Nablus, Palestine</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
