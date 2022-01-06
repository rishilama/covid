import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../store/UserContext";

export default function Signup(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            props.history.push('/');
        }
    }, [user, props.history])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://iifsd.herokuapp.com/auth/local/register', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    username: email,
                    email: email,
                    password: password
                })
            })

            const data = await response.json();
            console.log('data', data);

            if (data.error) {
                setError(data.message[0].messages[0].message);
                return;
            }

            setUser(data);
        } catch (err) {
            setError(err.toString());
        }
    }

    return (
        <div className="container">
            <div className="login-content">
                <h1>Sign Up</h1>

                {error && <p className="message error-message">{error.toString()}</p>}
                <br />


                <form className="loginForm" onSubmit={handleSubmit}>

                    <label htmlFor="firstName">First Name</label>
                    <input type="text" placeholder="First Name" required className="input" value={firstName} onChange={(e) => {
                        setError('');
                        setFirstName(e.target.value)
                    }} />

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" placeholder="Last Name" required className="input" value={lastName} onChange={(e) => {
                        setError('');
                        setLastName(e.target.value)
                    }} />

                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email Name" required className="input" value={email} onChange={(e) => {
                        setError('');
                        setEmail(e.target.value)
                    }} />

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" required className="input" value={password} onChange={(e) => {
                        setError('');
                        setPassword(e.target.value)
                    }} />

                    <div className="button-section">
                        <button className="login-button">Singup</button>
                    </div>
                </form>
                <p>Already a User? <Link className="underline" to="/login">Login</Link> instead</p>
            </div>
        </div>
    )
}