import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import SortControls from './components/SortControls';

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeSort, setActiveSort] = useState(null);

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

    
    const getSavings = (product) => (product.was_price ? product.was_price - product.price : 0);
    
    const getSortedProducts = () => {
        const sorted = [...products];

        if (activeSort === 'price') {
            sorted.sort((a, b) => a.price - b.price);
        }
        
        if (activeSort === 'name') {
            sorted.sort((a, b) => a.name.localeCompare(b.name));
        }

        if (activeSort === 'saving') {
            sorted.sort((a, b) => getSavings(a) - getSavings(b));
        }

        if (activeSort === 'reviews') {
            const withReviews = sorted.filter((p) => p.reviews);
            const withoutReviews = sorted.filter((p) => !p.reviews);
            withReviews.sort((a, b) => a.reviews - b.reviews);
            return [...withReviews, ...withoutReviews];
        }

        return sorted;
    };
    
    const handleSortChange = (sortKey) => {
        setActiveSort((current) => (current === sortKey ? null : sortKey));
    };
    
    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Something went wrong: {error}</p>;

    return (
        <div className="container">
            <h1>Office Essentials</h1>
            <SortControls activeSort={activeSort} onSortChange={handleSortChange} />
            <div className="product_grid">
                {getSortedProducts().map((product) => (
                    <ProductCard key={product.img} product={product} />
                ))}
            </div>
        </div>
    );
}

export default App;
