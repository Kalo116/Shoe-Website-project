import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { shoesCollectionRef } from '../../utils/firebase/firestore.collections';
import { addDoc } from 'firebase/firestore';
import { generateRandomID } from '../../utils/idGenerator';
import { UserContext } from '../../contexts/user.context';

import './create.styles.scss';

const defaultFormFileds = {
    name: '',
    price: '',
    category: '',
    img: ''
}

export const CreateProduct = () => {
    const [formFields, setFormFields] = useState(defaultFormFileds);
    const { name, price, category, img } = formFields;
    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({
            ...formFields,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || price === '' || category === '' || img === '') {
            return alert('All fields required!')
        };

        if (!currentUser) {
            return alert('You need to be logged to create shoe card!')
        };

        addDoc(shoesCollectionRef, {
            name,
            img,
            price: Number(price),
            category,
            ownerID: currentUser.uid,
            id: generateRandomID(),
        })
            .then(() => {
                setFormFields(defaultFormFileds);
                navigate('/shop');
            })
            .catch(err => console.log(err))

    };

    return (
        <div id="create" >
            <h2 className='create-title'>Create Your Shoe-Card</h2>
            <div className="create-product-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name='name'
                            value={name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            id="price"
                            name='price'
                            value={price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category:</label>
                        <select

                            id="category"
                            value={category}
                            onChange={handleChange}
                            name='category'
                        >

                            <option value="">Select a category</option>
                            <option value="Nike Air Force 1">Nike Air Force 1</option>
                            <option value="Nike Air Max">Nike Air Max</option>
                            <option value="Nike Air Zoom">Nike Air Zoom</option>
                            <option value="Nike Air Jordan 1">Nike Air Jordan 1</option>
                            <option value="Nike Dunk">Nike Dunk</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="img">Image URL:</label>
                        <input
                            type="text"
                            id="img"
                            name='img'
                            value={img}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Create Product</button>
                </form>
            </div>
        </div >
    );
};
