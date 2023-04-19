import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../utils/firebase/firebase.utils';

import { UserContext } from '../../contexts/user.context';
import { ShoesContext } from '../../contexts/shoes.context';

import { generateRandomID } from '../../utils/idGenerator';
import './edit.styles.scss';

const defaultFormFileds = {
    name: '',
    price: '',
    category: '',
    img: ''
}

export const EditProduct = () => {

    const [formFields, setFormFields] = useState(defaultFormFileds);
    const { name, price, category, img } = formFields;

    const { shoeID } = useParams();
    const { currentUser } = useContext(UserContext);
    const { data } = useContext(ShoesContext);

    const navigate = useNavigate();

    useEffect(() => {
        const editedItemDetails = data.filter((el) => el.id === shoeID)[0];
        setFormFields({
            name: editedItemDetails?.data.name,
            price: Number(editedItemDetails?.data.price),
            category: editedItemDetails?.data.category,
            img: editedItemDetails?.data.img
        });
    }, [data, shoeID]);


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
            return alert('All fields required!');
        };

        if (!currentUser) {
            return alert('You need to be logged to create shoe card!');
        };

        const docRef = doc(db, 'shoes', shoeID);
        updateDoc(docRef, {
            name,
            img,
            price: Number(price),
            category,
            ownerID: currentUser.uid,
            id: generateRandomID(),
        })
            .then(() => {
                setFormFields(defaultFormFileds);
                navigate(`/shop/details/${shoeID}`);
            })
    };

    return (
        <div id="create" >
            <h2 className='create-title'>Edit Your Shoe-Card</h2>
            {formFields
                ? <div className="create-product-container">
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
                        <button type="submit">Edit Product</button>
                    </form>
                </div>
                : <div className="no-info">
                    <span className="loader"></span>
                </div>
            }

        </div >
    );
};
