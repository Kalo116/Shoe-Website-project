import React from 'react'

const ShopCategories = ({
    onChangeHandler,
    data,
    search,
    onCategoryClick,
    inputValue,
    onInputChange
}) => {

    const priceList = data.map(el => el.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);

    return (
        <div className="left-section">
            <input
                type="text"
                className='search-input'
                placeholder='Search...'
                value={search}
                onChange={onChangeHandler}

            />
            <h1 className='left-section-title'>
                Categories
            </h1>

            <ul className="shop-categories">
                <li className="shop-category" onClick={onCategoryClick}>All</li>
                <li className="shop-category" onClick={onCategoryClick}>Nike Air Force 1</li>
                <li className="shop-category" onClick={onCategoryClick}>Nike Air Max</li>
                <li className="shop-category" onClick={onCategoryClick}>Nike Air Zoom</li>
                <li className="shop-category" onClick={onCategoryClick}>Nike Air Jordan 1</li>
                <li className="shop-category" onClick={onCategoryClick}>Nike Dunk</li>
            </ul>

            <h1 className="left-section-post-title">
                Maximum Price
            </h1>
            <div className="left-section-price">
                <input type="range" className='price-range'
                    min={minPrice}
                    max={maxPrice}
                    value={inputValue}
                    onChange={onInputChange}
                />
                <span className="price-value">${inputValue}</span>
            </div>
        </div>
    )
}

export default ShopCategories;