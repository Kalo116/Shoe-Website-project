import { Link } from 'react-router-dom';

import nikeLogo from '../../assets/nike.png';

import './footer.styles.scss';

export const Footer = () => {
    return (
        <footer id='footer'>
            <div className="footer-first">
                <div className="icons-footer-section">
                    <img src={nikeLogo} alt="" />
                    <p className="first-footer-p">
                        Lorem ipsum, dolor sit amet consectetur
                    </p>
                    <ul className="first-footer-icons">
                        <li className="first-footer-icon">
                            <Link to="#">
                                <i className="fa-brands fa-facebook"></i>
                            </Link>
                        </li>

                        <li className="first-footer-icon">
                            <Link to="">
                                <i className="fa-brands fa-instagram"></i>
                            </Link>
                        </li>

                        <li className="first-footer-icon">
                            <Link to="">
                                <i className="fa-brands fa-twitter"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2 className="footer-title">Find product</h2>
                    <ul className="footer-items">
                        <li className="footer-item">
                            <Link to="#">
                                Brownze Arnold
                            </Link>
                        </li>

                        <li className="footer-item">
                            <Link to="#">
                                Chronograph Blue
                            </Link>
                        </li>

                        <li className="footer-item">
                            <Link to="#">
                                Smart Phones
                            </Link>
                        </li>

                        <li className="footer-item">
                            <Link to="#">
                                Authomatic Watch
                            </Link>
                        </li>

                        <li className="footer-item">
                            <Link to="#">
                                Hair Straighteners
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2 className="footer-title">Get help</h2>
                    <ul className="footer-items">
                        <li className="footer-item">
                            <Link to="#">
                                About us
                            </Link>
                        </li>

                        <li className="footer-item">
                            <Link to="#">
                                Contact us
                            </Link>
                        </li>

                        <li className="footer-item">
                            <Link to="#">
                                Return Policy
                            </Link>
                        </li>

                        <li className="footer-item">
                            <Link to="#">
                                Privacy Policy
                            </Link>
                        </li>

                        <li className="footer-item">
                            <Link to="#">
                                Payment Policy
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2 className="footer-title">About us</h2>
                    <ul className="footer-items">
                        <li className="footer-item">
                            <Link to="#">
                                News
                            </Link>
                        </li>

                        <li className="footer-item">
                            <Link to="#">
                                Services
                            </Link>
                        </li>

                        <li className="footer-item">
                            <Link to="#">
                                Our Policy
                            </Link>
                        </li>

                        <li className="footer-item">
                            <Link to="#">
                                Customer Care
                            </Link>
                        </li>

                        <li className="footer-item">
                            <Link to="#">
                                Faq's
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-second">
                <p className='footer-second-paragraph'>
                    © 2023 CreativePeaples.All rights reserved.
                </p>
            </div>
        </footer>
    );
};