import './mainSection.styles.scss';
import { Link } from 'react-router-dom';


import blueShoeNike from '../../../assets/nike-blue-shoe.png';

import blueArrow from '../../../assets/blue-arrow-2.png';
import orangeArrow from '../../../assets/orange-arrow.png';


export const MainSection = () => {
    return (
        <section id='main-section'>

            <div className='main-info'>
                <h1 className='main-info-title'>
                    Summer Collections <span>2023</span>
                </h1>
                <p className='main-info-description'>
                    The styles of shoe available to consumers are endless and profit also endless
                </p>
                <Link className='main-button' to='/shop'>
                    <span>Show All</span>
                    <i className="fa-sharp fa-solid fa-circle-arrow-right"></i>
                </Link>
            </div>

            <div className='main-img-wrapper'>
                <img src={blueShoeNike} alt="" />
            </div>

            {/* <div className="review">
                <div className="review-top">
                    <div className='top-info'>
                        <span>4.9 | </span>
                        <div className="stars">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                        </div>
                    </div>
                    <p className='review-bottom-description'>
                        120K Total Review
                    </p>
                </div>
            </div> */}

            {/* <div className="blue-arrow-wrapper">
                <img src={blueArrow} alt="" />
            </div>

            <div className="orange-arrow-wrapper">
                <img src={orangeArrow} alt="" />
            </div>

            <div className="discount">
                <h2 className='discount-info'>
                    Get up yo 30% off
                </h2>
                <p className="discount-description">
                    You can get up to 30 percent doscount from here
                </p>
            </div> */}

        </section>
    );
};