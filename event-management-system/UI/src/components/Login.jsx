import { useState } from "react";
import login from "../services/loginService";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const submit = async (e) => {
        try {
            e.preventDefault();
            console.log(form);
            const res = await login(form);
            console.log(res);
            localStorage.setItem('token', res.token);
            navigate('/register', { state: { email: form.email } });
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f9f9f9'
        }}>
            <form onSubmit={submit} style={{
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                backgroundColor: '#fff',
                minWidth: '300px'
            }}>
                <h1 style={{ textAlign: 'center' }}>Login</h1>
                <label>Email:</label>
                <input
                    type="email"
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={{ width: '100%', marginBottom: '1rem' }}
                />
                <label>Password:</label>
                <input
                    type="password"
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    style={{ width: '100%', marginBottom: '1rem' }}
                />
                <button type="submit" style={{ width: '100%' }}>Login</button>
                {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
            </form>
        </div>
    );
};

export default Login;