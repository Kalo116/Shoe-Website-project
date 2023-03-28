import './contact-info.styles.scss';

export const ContactInfo = () => {
    return (

        <div className="contact-info-container">
            <h2 className="contact-info-title">
                Get in touch
            </h2>
            <p className="contact-info-p">
                Looking for help? Fill the form and start a new adventure
            </p>

            <div id="headquaters">
                <h3 className="contact-info-post-title">
                    Headquaters
                </h3>

                <div className="headquaters-info">
                    <i className="fa-solid fa-house"></i>
                    <span className="headquaters-info-address">
                        744 New York Ave, Brooklyn, Kings, New York 10224
                    </span>
                </div>
            </div>

            <div id="phone">
                <h3 className="contact-info-post-title">
                    Phone
                </h3>

                <div className="phone-info">
                    <i className="fa-solid fa-phone"></i>
                    <div className='phones'>
                        <span>
                            (+123) 456 789 012
                        </span>
                        <span>
                            (+345) 678 901 234
                        </span>
                    </div>
                </div>

            </div>

            <div id="support">
                <h3 className="contact-info-post-title">
                    Support
                </h3>

                <div className="support-info">
                    <i className="fa-solid fa-envelope"></i>
                    <div className='emails'>
                        <span>
                            support@gmail.com
                        </span>
                        <span>
                            help@gmail.com
                        </span>
                    </div>
                </div>
            </div>

            <div id="follow">
                <h3 className="contact-info-post-title">
                    Follow Us
                </h3>
                <div className="contact-info-icons">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
    );
};