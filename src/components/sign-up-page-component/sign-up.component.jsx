import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createAuthUserWithEmailAndPassword, createUserDocument } from '../../utils/firebase/firebase.utils';
import { useNavigate } from 'react-router-dom';
import './sign-up.styles.scss';

const defaultFormFileds = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'Male'
}

export const SignUpPage = () => {
    const [formFields, setFormFields] = useState(defaultFormFileds);
    const { displayName, email, password, confirmPassword, gender } = formFields;
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({
            ...formFields,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (displayName === '' || email === '' || password === '' || confirmPassword === '' || gender === '') {
            return alert('All fields required');
        };

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        };

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocument(user, { displayName, gender });
            setFormFields(defaultFormFileds);
            navigate('/');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                return alert('Cannot create user, email already in use');
            } else {
                console.log('Failed creating user with email and password', error.message);
            };
        };
    };

    return (
        <div className="sign-up-container">
            <div className="sign-up-img-container">
                <img src="https://media.istockphoto.com/id/1303978937/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?s=612x612&w=0&k=20&c=L725fuzFTnm6qEaqE7Urc5q6IR80EgYQEjBn_qtBIQg=" alt="" />
            </div>

            <div className="sign-up-info">
                <h2 className='sign-up-info-title'>Don't have an account?</h2>
                <span className='sign-up-info-post-title'>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <label className='form-label' htmlFor="displayName">
                        Display Name
                    </label>
                    <input
                        type="text"
                        name="displayName"
                        id="displayName"
                        className='form-input'
                        value={displayName}
                        onChange={handleChange}
                        required
                    />

                    <label className='form-label' htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className='form-input'
                        value={email}
                        onChange={handleChange}
                        required
                    />

                    <label className='form-label' htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className='form-input'
                        value={password}
                        onChange={handleChange}
                        required
                    />

                    <label className='form-label' htmlFor="confirmPassword">
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className='form-input'
                        value={confirmPassword}
                        onChange={handleChange}
                        required
                    />

                    <div className='radio-buttons'>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={gender === "Male"}
                                onChange={handleChange}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={gender === "Female"}
                                onChange={handleChange}
                            />
                            Female
                        </label>
                    </div>

                    <button className='sign-up-btn' type='submit'>
                        Sign up
                    </button>

                </form>
                <p className="sign-un-p">
                    <span> Already have account? Sing-in from </span>
                    <Link to='/sign-in'>Here</Link>
                </p>
            </div>
        </div>
    );
};