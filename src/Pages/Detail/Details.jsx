import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../Components/Loader/Loader'

function Details() {
    const [product, setProduct] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { pr_id } = useParams()

    const getProduct = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/${pr_id}`)
            setProduct(response.data)
            setError(null)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => { getProduct() }, [])

    if (error) return <h2 className="alert alert-danger text-center">error....</h2>
    if (isLoading) return <Loader />
    if (product.length === 0) return <p className="alert alert-warning text-center">No product found</p>

    return (
        <div className="container mt-4">
            <div className="card shadow mb-4">
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
                        <img src={product.images} alt={product.title} className="img-fluid rounded" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title text-primary">{product.title}</h2>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">
                                <span className="badge bg-success">{product.price}$</span>
                                {product.discountPercentage && (
                                    <span className="badge bg-warning text-dark ms-2">
                                        -{product.discountPercentage}%
                                    </span>
                                )}
                            </p>
                            <p>Brand: <strong>{product.brand}</strong></p>
                            <p>Category: <strong>{product.category}</strong></p>
                            <p>Stock: <strong>{product.stock}</strong></p>
                            <p>Rating: <strong>{product.rating}</strong></p>
                            <p>Availability: <strong>{product.availabilityStatus}</strong></p>
                            <p>Warranty: <strong>{product.warrantyInformation}</strong></p>
                            <p>Shipping: <strong>{product.shippingInformation}</strong></p>
                            <p>Return Policy: <strong>{product.returnPolicy}</strong></p>
                            {product.tags && <p>Tags: {product.tags.join(', ')}</p>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <h4>Reviews</h4>
                {product.reviews && product.reviews.length > 0 ? (
                    <div className="list-group">
                        {product.reviews.map((e, index) => (
                            <div key={index} className="list-group-item">
                                <h5 className="fw-bold">{e.reviewerName} ({e.rating}⭐)</h5>
                                <p className="mb-1">{e.comment}</p>
                                <small className="text-muted">{new Date(e.date).toLocaleDateString()}</small>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="alert alert-info">No reviews available</div>
                )}
            </div>

            {product.meta.qrCode && (
                <div className="mt-4">
                    <h5>QR Code</h5>
                    <img src={product.meta.qrCode} alt="QR Code" className="img-fluid" />
                </div>
            )}
        </div>
    )
}

export default Details
