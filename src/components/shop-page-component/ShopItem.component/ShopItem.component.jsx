import React from 'react';
import { Link } from 'react-router-dom';

import {
    useContext
} from 'react';

import { UserContext } from '../../../contexts/user.context';

const ShopItem = ({ shoe, shoeId }) => {
    const { currentUser } = useContext(UserContext);
    return (
        <div className="product">
            <img src={shoe.img} alt="nike-shoe-img" />
            <span className='product-name'>{shoe.name}</span>
            <div className="product-price-section">
                <span className='product-price'>${shoe.price}</span>
                <Link to={`/shop/details/${shoeId}`} className='product-btn'>Details</Link>
                {
                    currentUser?.uid === shoe.ownerID && <span>Yes, I am the owner</span>
                }
            </div>
        </div>
    )
}

export default ShopItem;