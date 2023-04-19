import React from 'react';
import { Link } from 'react-router-dom';

const ShopItem = ({ shoe, shoeId }) => {
    return (
        <div className="product">
            <img src={shoe.img} alt="nike-shoe-img" />
            <span className='product-name'>{shoe.name}</span>
            <div className="product-price-section">
                <span className='product-price'>${(shoe.price).toFixed(2)}</span>
                <Link to={`/shop/details/${shoeId}`} className='product-btn'>Details</Link>
            </div>
        </div>
    )
}

export default ShopItem;