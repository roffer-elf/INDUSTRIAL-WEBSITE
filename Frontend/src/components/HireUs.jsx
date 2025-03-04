import React, { useState } from 'react';
import axios from 'axios';

const Hireus = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      number:'',
      service: '',
    });
    const [responseMessage, setResponseMessage] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    const newMessage = { ...formData, timestamp: new Date().toISOString() };
  
    storedMessages.push(newMessage);
    localStorage.setItem('messages', JSON.stringify(storedMessages));
  
    setResponseMessage('Your message has been saved !');
  
    try {
      await axios.post('http://localhost:8000/data', formData);
    } catch (error) {
      console.error('Error sending data via Axios: ', error);
      setResponseMessage('Error while submitting to the API.');
    }
  
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      number:'',
      service: '',
    });
  };
  
    return(
      <div className='hireus'>
        <form onSubmit={handleSubmit}>
          <h2>Hire Us</h2>
          {responseMessage && <p>{responseMessage}</p>}
          <input placeholder='Your Name'name='name'type='text' onChange={handleChange} value={formData.name} required/>
          <input placeholder='Your Email' name='email'type='email' onChange={handleChange} value={formData.email} required/>
          <input placeholder='Your Phone Number'name='number' type='number' onChange={handleChange} value={formData.number}required/>
          <input placeholder='Your Query' name='service'type='text' onChange={handleChange} value={formData.service} required/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
  
  export default Hireus;