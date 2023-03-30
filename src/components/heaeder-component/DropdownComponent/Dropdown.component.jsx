import React from 'react';
import { Link } from 'react-router-dom';

export const Dropdown = ({
    toggle,
    currentUser,
    logOutHandler
}) => {
    return (
        <div className={toggle ? "dropdown_menu open" : 'dropdown_menu'}>
            <ul className='dropdown_menu_links'>
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
                <li>
                    {currentUser
                        ? (
                            <div className='current-user-info'>
                                <span>{currentUser.email}</span>
                                <button className='current-user-btn' onClick={logOutHandler}>Log out</button>
                            </div>
                        )
                        : <Link to="/sign-in" className='action_btn_dropdown'>
                            Get Started
                        </Link>}
                </li>
            </ul>
        </div>
    )
}