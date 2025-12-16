import React, { useState } from 'react';

const MyLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();

            if (res.ok) {
                setResponse('Login successful:', data);
            }
            else {
                setResponse('Login failed:', data.error);
            }
        } catch (err) {
            setResponse('Error during login:', err);
        }
    } 
  return (
    <div>
      <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input 
                type='email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br /><br />    
            <label>Password: </label>
            <input 
                type='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br /><br />
            <button type='submit'>Login</button>
        </form>

        <p>{response}</p>
    </div>
  )
}

export default MyLogin
