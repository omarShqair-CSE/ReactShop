import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../../Components/Loader/Loader';
import Error from '../../Components/Error/Error';
import Image from '../../Components/Imges/Image';
import Footer from '../../Components/Footer/Footer';

function Product() {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getProduct = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_API_URL);
            setProduct(response.data.products);
            setError(null);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => { getProduct(); }, []);

    if (isLoading) return <Loader />;
    if (error) return <Error message={error.message} onRetry={getProduct} />;

    return (
        <div className="container my-5">
            <h2 className="mb-4 text-center">All Products</h2>
            <div className="row g-4">
                {product.map(item => (
                    <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
                        <div className="card h-100 shadow-sm border-0 hover-shadow">
                            <Image
                                src={item.thumbnail}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                id={item.id}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
