import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import Image from '../../Components/Imges/Image';
import Error from '../../Components/Error/Error';


function Home() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getProducts = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_API_URL);
            setProducts(response.data.products.slice(0, 3));
            setError(null)
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => { getProducts(); }, []);

    return (
        <>
            <div className="bg-primary text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4 fw-bold">Welcome to MyTourism Shop</h1>
                    <p className="lead">Discover amazing products at unbeatable prices!</p>
                    <Link to="/product" className="btn btn-light btn-lg mt-3">Shop Now</Link>
                </div>
            </div>

            <div className="container my-5">
                <h2 className="mb-4 text-center">Featured Products</h2>
                {isLoading && <Loader />}
                {error && <Error message={error} onRetry={getProducts} />}
                <div className="row g-4">
                    {products.map(product => (
                        <div className="col-md-4" key={product.id}>
                            <div className="card h-100 shadow-sm border-0 hover-shadow">
                                <Image
                                    src={product.thumbnail}
                                    title={product.title}
                                    price={product.price}
                                    description={product.description}
                                    id={product.id}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center m-4 ">
                    <Link to="/product" className="btn btn-primary btn-lg">Show More</Link>
                </div>



            </div>

        </>
    );
}

export default Home;
