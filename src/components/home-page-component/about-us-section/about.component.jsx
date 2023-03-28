import './about.styles.scss';

import aboutShoe from '../../../assets/green-nike-shoe.png';


export const AboutSection = () => {
    return (
        <section id='about-us'>
            <div className="about-us-img-wrapper">
                <div className="about-us-img">
                    <img src={aboutShoe} alt="" />
                </div>

                <div className="about-us-img-info">
                    <h2 className="about-us-img-info_title">
                        Get up to 30% off
                    </h2>
                    <p className="about-us-img-info_description">
                        You can get up to 30 percent discount from here
                    </p>
                </div>
            </div>

            <div className="about-us-info">
                <p className="about-us-post-title">About Us</p>
                <h2 className='about_us_title'>
                    We Provide High Quality Shoes
                </h2>
                <p className="about_us_details-1">
                    "Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                </p>

                <p className="about_us_details-2">
                    "Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                </p>

                <button className="about_us_button">
                    <span className="about_us_button_content">
                        Explore More
                    </span>
                    <i className="fa-solid fa-circle-arrow-right about-us-icon"></i>
                </button>
            </div>
        </section>
    );
};