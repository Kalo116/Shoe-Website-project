import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../utils/firebase/firebase.utils';
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { ShoesContext } from '../../contexts/shoes.context';
import { UserContext } from '../../contexts/user.context';

import { Comments } from './comments-component/comments.component';

import './details.styles.scss';

export const Details = () => {
    const { shoeID } = useParams();
    const [shoeDetails, setShoeDetails] = useState({});
    const { data } = useContext(ShoesContext);
    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();

    console.log(currentUser);
    useEffect(() => {
        const shoeDetailsItem = data.filter((el) => el.id === shoeID);
        setShoeDetails(shoeDetailsItem[0]);
    }, [data, shoeID]);

    const onDeleteClickHandler = (e) => {
        e.preventDefault();
        const confirmed = window.confirm("Are you sure you want to delete this item?");
        if (confirmed) {
            const docRef = doc(db, 'shoes', shoeDetails.id);
            deleteDoc(docRef)
                .then(() => navigate('/shop'))
                .catch(err => console.log(err))
        } else {
            return;
        }
    };

    return (
        <div id='details'>
            <h1 className="details-title">
                Details
            </h1>
            {
                shoeDetails
                    ?
                    <>
                        <div className='details-container'>
                            <div className="details-img-wrapper">
                                <img src={shoeDetails.data?.img} alt="shoe-img" />
                            </div>

                            <div className="details-info">

                                <span>Name: {shoeDetails.data?.name}</span>
                                <span>Price: ${shoeDetails.data?.price}</span>
                                <span>Category: {shoeDetails.data?.cat}</span>

                                {
                                    currentUser && currentUser.uid && currentUser.uid === shoeDetails.data?.ownerID &&
                                    <div className="details-buttons">
                                        <Link to={`/shop/edit/${shoeDetails.id}`}>Edit</Link>
                                        <button onClick={onDeleteClickHandler}>Delete</button>
                                    </div>
                                }
                            </div>
                        </div>
                        <Comments shoeID={shoeID} comments={shoeDetails.data?.comments} user={currentUser} />
                    </>
                    : <div className="no-info">
                        <span className="loader"></span>
                    </div>
            }

        </div >
    )
}
