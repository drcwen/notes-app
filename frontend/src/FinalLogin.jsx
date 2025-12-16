import React, { useEffect, useState } from "react";


const FinalLogin = () => {

    const label = 'border p-2 rounded';

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage('');
        setError('');

        try {
            const res = await fetch('http://localhost:4000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if(res.ok) {
                setMessage("Sign in successful!");

                setUsername('');
                setPassword('');
            } else {
                setError(data.error || "Something went wrong");
            }
        } catch (err) {
            setError("Server error. Try again later.");
            console.error(err);
        }
    }

    return(
        <div className='flex justify-center items-center h-screen flex-col'>
            <h1 className='text-xl'>Sign In</h1>

            {error && <p className="text-red-500 mb-4">{error}</p>}
            {message && <p className="text-green-500 mb-4">{message}</p>}

            <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Username'
                    className={label}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required></input>

                <input
                    type='password'
                    placeholder='Password'
                    className={label}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required></input>

                <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
                    Sign In
                </button>
            </form>
        </div>
    )
}

export default FinalLogin;