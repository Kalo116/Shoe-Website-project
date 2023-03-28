import './testimonial.styles.scss';

export const Testimonial = () => {
    return (
        <div className="testimonial">
            <h1 className="testimonial-title">Testimonial</h1>
            <h2 className="testimonial-post-title">Here are some of our customers comments about our products</h2>

            <div className="testimonial-comments">

                <div className="testimonial-comment selena">

                    <div className="testimonial-img-wrapper selena"></div>

                    <div className="testimonial-comment-info">
                        <h1 className="testimonial-name">Selena Gomez</h1>

                        <div className="testimonial-comment-info-stars">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                        </div>

                        <p className="testimonial-description">
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga, rem pariatur, autem magnam,
                            inventore hic ipsum harum possimus
                            exercitationem consectetur neque? Harum aspernatur modi veritatis velit eligendi sint animi.""
                        </p>
                    </div>

                </div>

                <div className="testimonial-comment rock">

                    <div className="testimonial-comment-info-reverse">
                        <h1 className="testimonial-name">Dwayne Johnson (The Rock)</h1>

                        <div className="testimonial-comment-info-stars">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                        </div>

                        <p className="testimonial-description">
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga, rem pariatur, autem magnam,
                            inventore hic ipsum harum possimus
                            exercitationem consectetur neque? Harum aspernatur modi veritatis velit eligendi sint animi.""
                        </p>
                    </div>

                    <div className="testimonial-img-wrapper rock"></div>


                </div>

                <div className="testimonial-comment messi">

                    <div className="testimonial-img-wrapper messi"></div>

                    <div className="testimonial-comment-info">
                        <h1 className="testimonial-name">Leo Messi</h1>

                        <div className="testimonial-comment-info-stars">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                        </div>

                        <p className="testimonial-description">
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga, rem pariatur, autem magnam,
                            inventore hic ipsum harum possimus
                            exercitationem consectetur neque? Harum aspernatur modi veritatis velit eligendi sint animi.""
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};