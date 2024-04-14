import React, { useState } from 'react';
import axios from 'axios';

const FarmerRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    farmName: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Send formData to your backend API (POST request)
      await axios.post('/api/farmers/', formData); // Adjust the endpoint as needed
      console.log('Form data sent successfully!');
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      {/* Add other input fields (farmName, email, phoneNumber) */}
      <button type="submit">Register</button>
    </form>
  );
};

export default FarmerRegistrationForm;
