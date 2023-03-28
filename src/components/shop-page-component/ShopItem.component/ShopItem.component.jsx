import React from 'react'

const ShopItem = ({ shoe }) => {
    return (
        <div className="product">
            <img src={shoe.img} alt="nike-shoe-img" />
            <span className='product-name'>{shoe.name}</span>
            <div className="product-price-section">
                <span className='product-price'>${shoe.price}</span>
                <button className='product-btn'>Add to Cart</button>
            </div>
        </div>
    )
}

export default ShopItem;