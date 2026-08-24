import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';

function App() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch('http://localhost:8000/api/products.php')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Failed to fetch products');
				}
				return response.json();
			})
			.then((data) => {
				setProducts(data.product_arr);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	if (loading) return <p>Loading products...</p>;
	if (error) return <p>Something went wrong: {error}</p>;

	return (
        <>
            <h1>Office Essentials</h1>
            <div className="product_grid">
                {products.map((product) => (
                    <ProductCard key={product.img} product={product} />
                ))}
            </div>
        </>        
	);
}

export default App;
