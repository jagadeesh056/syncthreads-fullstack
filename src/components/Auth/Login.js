import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const res = await fetch('https://syncthreads-backend-4gj0.onrender.com/api/auth/login', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ username, password }),
            });
    
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || `HTTP error! Status: ${res.status}`);
            }
    
            const data = await res.json();
            login(data.token);
            
            navigate('/dashboard');
        } catch (error) {
            console.error("Login failed:", error.message);
            alert(error.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="input-field"/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="input-field"/>
                <button onClick={handleLogin} className="login-button">Login</button>
            </div>
        </div>
    );
};

export default Login;