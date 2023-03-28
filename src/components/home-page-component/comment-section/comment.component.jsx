import './comment.styles.scss';

export const CommentSection = () => {
    return (
        <section id='comments'>
            <div className="comments-title-section">
                <h2 className="comments-title">
                    What Out Customers Says
                </h2>
                <div className="comments-arrows">
                    <i className="fa-solid fa-arrow-left"></i>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>

            <div className="comments">
                <article className='comment'>
                    <div className="comment-img-wrapper-female"></div>
                    <div className="comment-info">
                        <p className='comment-info-p'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer
                        </p>

                        <div className="comment-info-stars">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                        </div>
                        <h3 className="comment-info-writter">
                            Matilda
                        </h3>
                    </div>
                </article>

                <article className='comment'>
                    <div className="comment-img-wrapper-male"></div>
                    <div className="comment-info">
                        <p className='comment-info-p'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer
                        </p>

                        <div className="comment-info-stars">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                        </div>
                        <h3 className="comment-info-writter">
                            Remington
                        </h3>
                    </div>
                </article>
            </div>

        </section>
    );
};