import { useState } from 'react';
import './subscribe.styles.scss';

export const SubscribeSection = () => {
    const [value, setValue] = useState('');

    const onChangeHandler = (e) => {
        setValue(e.target.value)
    }

    return (
        <section id='subscribe'>
            <h2 className='subscribe-title'>
                Subscribe for Updates & Newsletter
            </h2>
            <div className="input-container">
                <input
                    type="email"
                    placeholder='Type Your Email'
                    className='subscribe-input'
                    value={value}
                    onChange={onChangeHandler} />
                <button className='subscribe-button' onClick={() => setValue('')}>
                    Subscribe Now
                </button>
            </div>
        </section>
    );
};