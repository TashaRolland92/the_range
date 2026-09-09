function Spinner() {
    return (
        <div className="spinner_wrapper" role="status" aria-live="polite">
            <div className="spinner"></div>
            <p>Loading products...</p>
        </div>
    );
}

export default Spinner;
