
import React, { useState } from 'react'

const Practice = () => {

    //const [count, setCount] = useState(0);

    const [firstName, setfirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:4000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, email, password, confirmPassword }),
            });
            const data = await res.json();

            if (res.ok) {
                setResponse(`User created with ID: ${data._id}`);
                setfirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            }
        }
        catch (err) {
            setResponse(`Error: ${err.message}`);
            
        }
    }

  return (


    /*<div>
        <h1>Practice Component</h1>
        <p>Count: {count}</p>
        <button onClick={
            () => setCount(count + 1)
        }>Button</button>
    </div>*/
    <div>
        <h1>Sign Up</h1>
        <br />
        <form onSubmit={handleSubmit}>
            <label>First Name: </label>
            <input 
                type='text' 
                value={firstName} onChange={(e) => setfirstName(e.target.value)}
                className='border'></input>

            <br />
            <label>Last Name: </label>
            <input 
                type='text' 
                value={lastName} onChange={(e) => setLastName(e.target.value)}
                className='border'></input>

            <br />
            <label>Email: </label>
            <input 
                type='email' 
                value={email} onChange={(e) => setEmail(e.target.value)}
                className='border'></input>
            
            <br />
            <label>Password: </label>
            <input 
                type='password' 
                value={password} onChange={(e) => setPassword(e.target.value)}
                className='border'></input>
            <br />
            <label>Confirm Password: </label>
            <input 
                type='password' 
                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                className='border'></input>
            <br /><br />
            <button
                type='submit'
                className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600'
            >Submit</button>

            
        </form>

        <p>{response}</p>
    </div>
  )
}

export default Practice
