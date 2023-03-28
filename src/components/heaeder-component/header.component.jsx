import { signOutUser } from '../../utils/firebase/firebase.utils';

import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/user.context';

import { Link } from 'react-router-dom';

import nikeLogo from '../../assets/nike.png';
import './header.styles.scss';
import Dropdown from './DropdownComponent/Dropdown.component';

export const Header = () => {
    const [toggle, setToggle] = useState(false);

    const { currentUser, setCurrentUser } = useContext(UserContext);

    const onToggleHandler = () => {
        setToggle((oldState) => {
            return !oldState
        });
    };

    const logOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    };

    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <Link to="/">
                        <img src={nikeLogo} alt="" />
                    </Link>
                </div>

                <ul className="links">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link to="/testimonial">
                            Testimonial
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacts">
                            Contacts
                        </Link>
                    </li>
                </ul>

                {currentUser
                    ? (
                        <div className='current-user-info'>
                            <span>{currentUser.email}</span>
                            <button className='current-user-btn' onClick={logOutHandler}>Log out</button>
                        </div>
                    )
                    : <Link to="/sign-in" className='action_btn'>Get Started</Link>
                }


                <div className="toggle_btn" onClick={onToggleHandler}>
                    {toggle
                        ? <i className="fa-solid fa-x"></i>
                        : <i className="fa-solid fa-bars"></i>}
                </div>
            </div>

            <Dropdown currentUser={currentUser} logOutHandler={logOutHandler} toggle={toggle} />
        </header >
    );
};
