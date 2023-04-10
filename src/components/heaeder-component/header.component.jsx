import { signOutUser } from '../../utils/firebase/firebase.utils';

import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/user.context';

import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from './dropdownComponent/dropdown.component';

import nikeLogo from '../../assets/nike.png';
import './header.styles.scss';

export const Header = () => {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const { currentUser, setCurrentUser, setCurrentUserData } = useContext(UserContext);

    const onToggleHandler = () => {
        setToggle((oldState) => {
            return !oldState
        });
    };

    const logOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
        setCurrentUserData(null);
        navigate('/');
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

                    {currentUser &&
                        <li>
                            <Link to="/create">
                                Create
                            </Link>
                        </li>
                    }
                </ul>

                {currentUser
                    ? (
                        <div className='current-user-info'>
                            <span>{currentUser.email}</span>
                            <Link to='/profile'>
                                <i className="fa-solid fa-user"></i>
                            </Link>
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
