// AdmissionForm.js
import React, { useState } from 'react';
import './AdmissionForm.css'; // Import your CSS file

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phoneNumber: '',
    emailAddress: '',
    batch: '',
    startDate: '', // New field for Start Date
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentClick = async () => {
    // Perform form validation
    if (
      formData.name === '' ||
      formData.age === '' ||
      formData.gender === '' ||
      formData.phoneNumber === '' ||
      formData.emailAddress === '' ||
      formData.batch === '' ||
      formData.startDate === ''
    ) {
      window.alert('Please fill in all fields before submitting.');
      return;
    }

    try {
      // Mock payment logic (you can replace this with actual payment integration)
      console.log('Payment successful!');

      // Call API to store data in the database
      const response = await fetch('http://localhost:3001/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to store data in the database');
      }

      console.log('Data stored in the database');

      // Clear form data
      setFormData({
        name: '',
        age: '',
        gender: '',
        phoneNumber: '',
        emailAddress: '',
        batch: '',
        startDate: '', // Reset Start Date
      });

      // Display payment success alert
      window.alert('Payment successful! Form submitted.');
    } catch (error) {
      console.error('Error storing data:', error);
      // Handle error
    }
  };

  return (
    <div className="admission-form">
      <h2>Yoga Admission Form</h2>
      <form>
        <div className="form-group">
          <label>
            Name:
            <input type="text" name="name" onChange={handleInputChange} value={formData.name} required />
          </label>
        </div>

        <div className="form-group">
          <label>
            Age (18-65):
            <input
              type="number"
              name="age"
              onChange={handleInputChange}
              value={formData.age}
              required
              min="18"
              max="65"
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Gender:
            <select name="gender" onChange={handleInputChange} value={formData.gender} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="preferNotToSay">Prefer Not to Say</option>
            </select>
          </label>
        </div>

        <div className="form-group">
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              onChange={handleInputChange}
              value={formData.phoneNumber}
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Email Address:
            <input
              type="email"
              name="emailAddress"
              onChange={handleInputChange}
              value={formData.emailAddress}
              placeholder="example@example.com"
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Preferred Batch:
            <select name="batch" onChange={handleInputChange} value={formData.batch} required>
              <option value="">Select Batch</option>
              <option value="6-7AM">6-7AM</option>
              <option value="7-8AM">7-8AM</option>
              <option value="8-9AM">8-9AM</option>
              <option value="5-6PM">5-6PM</option>
            </select>
          </label>
        </div>

        <div className="form-group">
          <label>
            Start Date:
            <input
              type="date"
              name="startDate"
              onChange={handleInputChange}
              value={formData.startDate}
              required
            />
          </label>
        </div>

        <p className="note">
          Note: Participants can shift to another batch in different months but must stay in the same batch for the current month.
        </p>

        <button type="button" className="pay-button" onClick={handlePaymentClick}>
          Pay 500/- INR
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;
