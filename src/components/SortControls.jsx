function SortControls({ activeSort, onSortChange }) {
    const sortOptions = [
        { key: 'price', label: 'Sort By Price' },
        { key: 'reviews', label: 'Sort By Review' },
        { key: 'name', label: 'Sort By Name' },
        { key: 'saving', label: 'Sort By Saving' },
    ];

    return (
        <div className="sort_controls">
            {sortOptions.map((option) => (
                <button
                    key={option.key}
                    className={`btn sort_btn ${activeSort === option.key ? 'active' : ''}`}
                    onClick={() => onSortChange(option.key)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}

export default SortControls;
