import { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [referral, setReferral] = useState('web-search');
    const [reply, setReply] = useState('');
    const [terms, setTerms] = useState(false);

    const sendData = async data => {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/contact-form`, data);
        // const response = await axios.post('http://localhost:3000/contact-form', data);

        // console.log(response);
    };

    return (
        <form
            onSubmit={event => {
                event.preventDefault();

                const data = {
                    name,
                    email,
                    phone,
                    message,
                    referral,
                    reply,
                    terms,
                };

                sendData(data);

                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setReferral('web-search');
                setReply('');
                setTerms(false);
            }}
        >
            <section className="personal-info">
                <h2>How can we help you ?</h2>
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" value={name} onChange={event => setName(event.target.value)} />

                <label htmlFor="email">Your E-mail Address</label>
                <input type="email" name="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />

                <label htmlFor="phone">Your Phone Number</label>
                <input type="text" name="phone" id="phone" value={phone} onChange={event => setPhone(event.target.value)} />

                <label htmlFor="message">Your Message</label>
                <textarea name="message" id="message" rows="6" value={message} onChange={event => setMessage(event.target.value)}></textarea>

                <label htmlFor="referral">How did you find us ?</label>
                <select name="referral" id="referral" value={referral} onChange={event => setReferral(event.target.value)}>
                    <option value="web-search">Web Search</option>
                    <option value="friend">Friend's referral</option>
                    <option value="office">We use your services at the office</option>
                </select>
            </section>

            <section className="reply">
                <h2>How should we reply ?</h2>
                <div className="form-control-input">
                    <input type="radio" name="reply" id="reply-call" value="call" checked={reply === 'call'} onChange={() => setReply('call')} />
                    <label htmlFor="reply-call">Call me</label>
                </div>

                <div className="form-control-input">
                    <input type="radio" name="reply" id="reply-email" value="email" checked={reply === 'email'} onChange={() => setReply('email')} />
                    <label htmlFor="reply-email">Send me an email</label>
                </div>

                <div className="form-control-input">
                    <input type="radio" name="reply" id="reply-none" value="none" checked={reply === 'none'} onChange={() => setReply('none')} />
                    <label htmlFor="reply-none">Don't reply</label>
                </div>

                <div className="form-control-input">
                    <input type="checkbox" name="terms" id="terms" checked={terms} onChange={event => setTerms(event.target.checked)} />
                    <label htmlFor="terms">Accept Terms</label>
                </div>
            </section>

            <section className="buttons">
                <button className="clear" type="reset">
                    Clear
                </button>
                <button className="submit" type="submit">
                    Submit
                </button>
            </section>
        </form>
    );
};

export default Form;
