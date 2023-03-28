import './contact-form.styles.scss';

export const ContactForm = () => {
    return (
        <div className="contact-form-container">
            <h2 className="contact-form-title">
                Let's Connect
            </h2>

            <p className="contact-form-p">
                Integet at lorem eget diam facilisis lacinia ac id massa
            </p>

            <form className="contact-form">
                <input type="text" id="name" className='input' placeholder="Your Name" />
                <input type="email" id="name" className='input' placeholder="Your Email" />
                <input type="text" id="name" className='input' placeholder="Subject" />
                <input type="text" id="name" className='input-help' placeholder="How can we help" />

                <button type="submit" className='formBtn'>Send Message</button>
            </form>
        </div>
    );
};