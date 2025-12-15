import React, { useEffect, useState } from "react";
import axios from "axios";

const SignUp = () => {

    const label = 'border p-2 rounded';

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [username, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("");
        setError("");

        if (password !== cpassword) {
            setError("Password do not match");
            return;
        }

        try {
            const res = await fetch('http://localhost:4000/mysignup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, username, email, password, confirmPassword: cpassword }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage("Sign up successful!");

                setfirstName("");
                setlastName("");
                setuserName("");
                setEmail("");
                setPassword("");
                setCPassword("");
            } else {
                setError(data.message || "Something went wrong")
            }
            
        } catch (err) {
            setError("Server error. Try again later.");
            console.error(err);
        }

    }
  return (
    <div className='flex justify-center items-center h-screen flex-col'>
        <h1 className='text-xl'>Sign Up</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {message && <p className="text-green-500 mb-4">{message}</p>}

        <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                className={label}
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Last Name"
                className={label}
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Username"
                className={label}
                value={username}
                onChange={(e) => setuserName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                className={label}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                className={label}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Confirm Password"
                className={label}
                value={cpassword}
                onChange={(e) => setCPassword(e.target.value)}
                required
            />

            <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
                Sign Up
            </button>
            </form>
    </div>
  )
}

export default SignUp