import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../contexts/user.context";
import { ShoesContext } from "../../contexts/shoes.context";

import ShopItem from "../shop-page-component/ShopItem.component/ShopItem.component";

import femalePng from '../../assets/female-profile.jpg';
import malePng from '../../assets/male-profile.jpg';

import './profile.styles.scss';

export const Profile = () => {
    const [myCards, setMyCards] = useState([]);
    const [gender, setGender] = useState('');

    const { currentUser, currentUserData } = useContext(UserContext);
    const { data } = useContext(ShoesContext);

    useEffect(() => {
        const filteredCards = data.filter(card => {
            return currentUser.uid === card.data.ownerID
        })
        setMyCards(filteredCards);
        setGender(currentUserData.gender);
    }, [data, currentUser.uid, currentUserData.gender]);

    return (
        <>
            <h1 className="profile-title">Profile</h1>
            <div className="profile-container">

                <div className="profile-info">
                    <div className="profile-img-wrapper">
                        {gender === 'Male'
                            ? <img src={malePng} alt="male-img" />
                            : <img src={femalePng} alt="female-img" />
                        }
                    </div>

                    <div className="profile-details">
                        <span className="profile-displayName">Displat name: {currentUserData.displayName}</span>
                        <span className="profile-email">Email: {currentUserData.email}</span>
                        <span className="profile-gender">Gender: {currentUserData.gender}</span>
                    </div>
                </div>
                <div className="profile-products">
                    {myCards.length > 0
                        ? myCards.map(shoeCard => <ShopItem key={shoeCard.id} shoe={shoeCard.data} shoeId={shoeCard.id} />)
                        : <h1 className="no-cards-title">No cards</h1>
                    }
                </div>
            </div>

        </>
    )
};