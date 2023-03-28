import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    signInWithGooglePopup,
    createUserDocument,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import './sign-in.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
}

export const SignInPage = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const navigate = useNavigate();

    const signInWithGoogle = async (e) => {
        e.preventDefault();
        try {
            await signInWithGooglePopup();
            navigate('/')
        } catch (error) {
            console.log(`Failed signing in user with Google `, error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            setFormFields(defaultFormFields);
            navigate('/');
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                return alert('Wrong email or password!');
            } else if (error.code === 'auth/user-not-found') {
                return alert('Invalid email!');
            } else {
                console.log('Failed signing in user with email and password ', error.message);
            };
        }

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({
            ...formFields,
            [name]: value
        });
    };



    return (
        <div className="sign-in-container">
            <div className="sign-in-img-container">
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8d53955-784b-4fcd-b189-ad23a75c532e/zoom-fly-5-mens-running-shoes-jGsdSl.png" alt="" />
            </div>

            <div className="sign-in-info">
                <h2 className="sign-in-title">Already have an account</h2>
                <span className="sign-in-post-title">Sign in with your email and password</span>
                <form className="sign-in-form" onSubmit={handleSubmit}>

                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        className="form-input"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />

                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        className="form-input"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />

                    <div className="sing-in-button-container">
                        <button className="sign-in-btn" type="submit">Sign In</button>
                        <button className="sign-in-btn" type="button" onClick={(e) => signInWithGoogle(e)}>
                            Sign In with Google
                            <i className="fa-brands fa-google" />
                        </button>
                    </div>

                </form>

                <p className="sign-in-p">
                    <span> Don't have account? Sing-up from </span>
                    <Link to='/sign-up'>Here</Link>
                </p>
            </div>
        </div>
    );
}; 