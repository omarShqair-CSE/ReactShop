import React from 'react'
import { Link } from 'react-router-dom'
import './Image.css'

function Image({ src, title, description, price, id }) {
    return (
        <div className="card h-100 custom-card">
            <img src={src} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-muted">{description}</p>
                <p className="card-text">
                    <span className="badge bg-success">{price}$</span>
                </p>
            </div>
            <div className="card-footer bg-transparent border-0">
                <Link to={`/product/${id}`} className="btn btn-primary w-100 custom-btn">
                    Details product{id}
                </Link>
            </div>
        </div>
    )
}

export default Image
