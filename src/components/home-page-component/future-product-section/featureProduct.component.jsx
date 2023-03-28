import './featureProduct.styles.scss';

import featureShoe from '../../../assets/feature-product-shoe.png';

export const FeatureProductSection = () => {
    return (

        <section id='feature-product'>
            <div className="feature-product-info">
                <p className="post-title">Product Details</p>
                <h2 className='feature_product_title'>
                    Get to Know Our Feature Product
                </h2>
                <p className="feature_product_details">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <article className="feature_product_benefits">
                    <i className="fa-solid fa-award"></i>
                    <div className="benefits-info">
                        <h3 className="benefits_title">
                            Best Quality Shoes
                        </h3>
                        <p className="benefits_description">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </div>
                </article>

                <article className="feature_product_benefits">
                    <i className="fa-solid fa-money-bill"></i>
                    <div className="benefits-info">
                        <h3 className="benefits_title">
                            Best Quality Shoes
                        </h3>
                        <p className="benefits_description">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </div>
                </article>
            </div>

            <div className='feature-product-wrapper-container'>
                <div className="feature-product-wrapper">
                    <img src={featureShoe} alt="" />
                </div>
                <div className="feature-product-wrapper-desciption">
                    <h2 className='feature-product-wrapper-title'>
                        Nike Watch Series 7
                    </h2>
                    <div className="kon-1">
                        <div className='kon-1-spans'>
                            <span className='line-through'>$119.99</span>
                            <span>$89.99</span>
                        </div>
                        <i className="fa-solid fa-cart-shopping kon-1-cart-i" />
                    </div>

                </div>
            </div>
        </section>
    );
};