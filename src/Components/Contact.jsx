import './Contact.css'

import React, { useState } from 'react';

const Contact= () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    
    let formIsValid = true;
    let newErrors = { name: '', email: '', message: '' };

    if (!formData.name) {
      formIsValid = false;
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      formIsValid = false;
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message) {
      formIsValid = false;
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    if (formIsValid) {
      alert('Form submitted successfully!');
      
    }
  };

  return (
    <div className="form-container">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
