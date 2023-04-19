import './popularProducts.styles.scss';

import greenJordan from '../../../assets/green-jordan.png';
import yellowJordan from '../../../assets/yellow-jordan.png';
import blueJordan from '../../../assets/blue-jordan.png';
import redJordan from '../../../assets/red-jordan.png';

export const PopularProducts = () => {
    return (

        <section id='popular-products'>
            <h1 className='popular-products-title'>Popular <span>Cards</span></h1>
            <div className="cards">
                <article className="card">
                    <article className='card-img-wrapper'>
                        <img src={redJordan} alt="" />
                        <i className="fa-brands fa-gratipay img-heart"></i>
                    </article>
                    <article className='card-info'>
                        <div className="card__rating">
                            <i className="fa-solid fa-star" />
                            <span>(4.5)</span>
                        </div>
                        <h2 className="card__title">
                            Nike Air Jordan-100
                        </h2>
                    </article>
                </article>

                <article className="card">
                    <article className='card-img-wrapper'>
                        <img src={blueJordan} alt="" />
                        <i className="fa-brands fa-gratipay img-heart"></i>
                    </article>
                    <article className='card-info'>
                        <div className="card__rating">
                            <i className="fa-solid fa-star" />
                            <span>(4.5)</span>
                        </div>
                        <h2 className="card__title">
                            Nike Air Jordan-100
                        </h2>
                    </article>

                </article>

                <article className="card">
                    <article className='card-img-wrapper'>
                        <img src={yellowJordan} alt="" />
                        <i className="fa-brands fa-gratipay img-heart"></i>
                    </article>
                    <article className='card-info'>
                        <div className="card__rating">
                            <i className="fa-solid fa-star" />
                            <span>(4.5)</span>
                        </div>
                        <h2 className="card__title">
                            Nike Air Jordan-100
                        </h2>
                    </article>

                </article>

                <article className="card">
                    <article className='card-img-wrapper'>
                        <img src={greenJordan} alt="" />
                        <i className="fa-brands fa-gratipay img-heart"></i>
                    </article>
                    <article className='card-info'>
                        <div className="card__rating">
                            <i className="fa-solid fa-star" />
                            <span>(4.5)</span>
                        </div>
                        <h2 className="card__title">
                            Nike Air Jordan-100
                        </h2>
                    </article>

                </article>

            </div>
        </section>

    );
};