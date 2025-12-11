import React, { useState } from 'react';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();

      if (res.ok) {
        setResponse(`User created with ID: ${data._id}`);
        setName('');
        setEmail('');
      } else {
        setResponse(`Error: ${data.error}`);
      }
    } catch (err) {
      setResponse(`Error: ${err.message}`);
    }
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-5 border rounded'>
      <h2 className='text-xl'>Enter user data</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          className='border p-1'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />
        <label>Email: </label>
        <input
          className='border p-1'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />
        <button 
            className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600'
            type='submit'>Submit</button>
      </form>

      <p>{response}</p>
    </div>
  );
};

export default Login;
