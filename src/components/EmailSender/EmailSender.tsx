import React from 'react';
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message
    };
    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data)
    });
    console.log(data);
    console.log(data);
    console.log(data);
  };

  return (
    <div>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" onChange={(e) => setName(e.target.value)} />
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="message">Message:</label>
          <textarea id="message" onChange={(e) => setMessage(e.target.value)} />
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
}
