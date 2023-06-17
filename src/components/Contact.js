import React, { useState } from 'react';
import './Contact.css'; 
import {toast} from "react-hot-toast"
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
    toast.success("Thank you for contacting us! We will get back to you shortly.");

  };
  return (
    <div className="contact-container">
    <h1>Contact Us</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder='Enter your Name'
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
        placeholder='Enter your email address'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          placeholder='Write your message here'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type=" btn-pink">Submit</button>
    </form>
  </div>
  )
}

export default Contact