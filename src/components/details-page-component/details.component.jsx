import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ShoesContext } from '../../contexts/shoes.context';
import { UserContext } from '../../contexts/user.context';

import './details.styles.scss';

export const Details = () => {
    const { shoeID } = useParams();
    const [shoeDetails, setShoeDetails] = useState({});
    const { data } = useContext(ShoesContext);
    const { currentUser } = useContext(UserContext);


    useEffect(() => {
        const shoeDetailsItem = data.filter((el) => el.id === shoeID);
        setShoeDetails(shoeDetailsItem[0]);
        console.log(`changed`);
    }, [data]);

    return (
        <div id='details'>
            <h1 className="details-title">
                Details
            </h1>
            {
                shoeDetails
                    ? <div className='details-container'>
                        <div className="details-img-wrapper">
                            <img src={shoeDetails.data?.img} alt="nothing" />
                        </div>

                        <div className="details-info">

                            <span>Name: {shoeDetails.data?.name}</span>
                            <span>Price: ${shoeDetails.data?.price}</span>
                            <span>Category: {shoeDetails.data?.category}</span>

                            {
                                currentUser?.uid === shoeDetails.data?.ownerID &&
                                <div className="details-buttons">
                                    <a>Edit</a>
                                    <a>Delete</a>
                                </div>
                            }
                        </div>

                    </div>
                    : <div className="no-info">
                        <span className="loader"></span>
                    </div>
            }

        </div >
    )
}
