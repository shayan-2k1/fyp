import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
const AcademicForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    degree: '',
    discipline: '',
    country: '',
    university: '',
    GPA: 0,
    yearOfCompletion: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authToken = Cookies.get('auth_token');
    try {
      const response = await axios.post('http://127.0.0.1:3000/academic/info', formData, {
        headers: {
          Authorization: `Bearer ${authToken}`, // Add your authentication token here
        },
      });

      if (response.status === 201) {
        console.log('Data sent successfully');
        navigate('/study-interest');
      } else {
        console.log('Data submission failed');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div className="component">
      <div className="container">
        <h1 id="title">ACADEMIC BACKGROUND</h1>
        <div className="formDiv">
          <form id="personal-info" onSubmit={handleSubmit}>
            <div className="input">
              <label className="bold" htmlFor="degree">Degree Level</label>
              <br />
              <input type="text" id="degree" className="info-input" name="degree" onChange={handleChange} value={formData.degree} />
            </div>

            <div className="input">
              <label className="bold" htmlFor="discipline">What discipline did you study?</label>
              <br />
              <input type="text" id="discipline" className="info-input" name="discipline" onChange={handleChange} value={formData.discipline} />
            </div>

            <div className="input">
              <label className="bold" htmlFor="country">Which country did you study in?</label>
              <br />
              <input type="text" id="country" className="info-input" name="country" onChange={handleChange} value={formData.country} />
            </div>

            <div className="input">
              <label className="bold" htmlFor="university">University name</label>
              <br />
              <input type="text" id="university" className="info-input" name="university" onChange={handleChange} value={formData.university} />
            </div>

            <div className="input">
              <label className="bold" htmlFor="GPA">GPA</label>
              <br />
              <input type="number" id="GPA" className="info-input" name="GPA" onChange={handleChange} value={formData.GPA} max={4} min={0} />
            </div>

            <div className="input">
              <label className="bold" htmlFor="yearOfCompletion">Year of Completion</label>
              <br />
              <input type="number" id="yearOfCompletion" className="info-input" name="yearOfCompletion" onChange={handleChange} value={formData.yearOfCompletion} />
            </div>

            <button className="submit input" type="submit">Submit and Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AcademicForm;