import { ContactInfo } from './contact-info-component/contact-info.component';
import { ContactForm } from './contact-form-component/contact-form.component';

import './contact.styles.scss';

export const Contact = () => {
    return (
        <>
            <h1 className='contacts-title'>Contacts</h1>
            <div className="contact-container">
                <ContactInfo />
                <ContactForm />
            </div>

        </>
    );
};

