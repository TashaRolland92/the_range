function ProductCard({ product }) {
    const formatPrice = (pence) => `£${(pence / 100).toFixed(2)}`;

    return (
        <div className="product_card">
            <img src={`/img/${product.img}.jpg`} alt={product.name} />
            <h2>{product.name}</h2>
            <p className="price">
                {product.was_price && (
                    <span className="was_price">
                        {formatPrice(product.was_price)}
                    </span>
                )}

                {formatPrice(product.price)}
            </p>            
            {product.reviews && (
                <p className="reviews">{product.reviews}% Review Score</p>
            )}
            <button className="btn add_to_basket">Add to Basket</button>
        </div>
    );
}

export default ProductCard;
