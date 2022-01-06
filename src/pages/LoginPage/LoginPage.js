import "./LoginPage.css"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../store/UserContext";

export default function Login(props) {
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
            const response = await fetch('https://iifsd.herokuapp.com/auth/local/', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    identifier: email,
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
                <h1>Login</h1>

                {error && <p className="message error-message">{error.toString()}</p>}
                <br />

                <form className="loginForm" onSubmit={handleSubmit}>

                    <label htmlFor="email">Email</label>

                    <input type="email" 
                        className="input" 
                        value={email} 
                        placeholder="Enter your Email Id"
                        required
                        onChange={(e) => {
                        setError('');
                        setEmail(e.target.value)
                    }} />

                    <label htmlFor="password">Password</label>
                    <input type="password" 
                        className="input" 
                        value={password} 
                        placeholder="Enter your Password"
                        required
                        onChange={(e) => {
                        setError('');
                        setPassword(e.target.value)
                    }} />
                    <button className="login-button">Login</button>
                </form>
            </div>
        </div>
    )
}