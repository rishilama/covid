import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Result from '../Result/Result';

function Contact() {
    const [result, showResult] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tw5kdme', 'template_vigys5v', e.target, 'user_XEUyq04wKUQ5hsxB5dc0H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        showResult(true);
    };

    return (
        <div className="contact" id="contact">
            <div className="container">
                <div className="contact-section">
                    <h1 className="section__heading contact-section__heading">
                        Contact us
                    </h1>
                    <div className="contact-form__map__section">
                        <div className="left left__contact-section">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58855.924928948625!2d86.14075136002553!3d22.78410371348151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e31989f0e2b5%3A0xeeec8e81ce9b344!2sJamshedpur%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1640496646787!5m2!1sen!2sin"
                                title='map' width="550" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                        <div className="right right__contact-section">
                            <form className="contact__form" onSubmit={sendEmail}>
                                <input type="text" name='fullname' placeholder="Name" required className="contact__form-text" />
                                <input type="email" name='email' placeholder="Email" required className="contact__form-text" />
                                <textarea rows="15" name='message' placeholder="Message" required className="contact__form-text"></textarea>
                                <div className="contact-btn">
                                    <input type="submit" className="button contact-button" name="Submit" />
                                </div>
                                <div>
                                    {result ? <Result /> : null}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact
