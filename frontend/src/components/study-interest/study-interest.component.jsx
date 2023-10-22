import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import the js-cookie library
import { useNavigate } from "react-router-dom";

const InterestForm = () => {
  const navigate = useNavigate();

  const [studyInterest, setStudyInterest] = useState('');
  const [placeToStudy, setPlaceToStudy] = useState('');
  const [countryStudied, setCountryStudied] = useState('');
  const [startTime, setStartTime] = useState('');
  const [budgetPref, setBudgetPref] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authToken = Cookies.get('auth_token'); // Retrieve the user's authentication token from cookies

    try {
      const response = await axios.post(
        'http://127.0.0.1:3000/studyInterest/info', // Replace with your endpoint
        {
          studyInterest,
          placeToStudy,
          
          startTime,
          budgetPref,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.status === 200) {
        alert('Study Preferences updated successfully');
        navigate('/doc-wallet'); // Redirect to the 'doc-wallet' page
      }
    } catch (error) {
      console.error('Error updating study preferences:', error);
    }
  };

  return (
    <div className="component">
      <div className="container">
        <h1 id="title">STUDY INTEREST</h1>
        <div className="formDiv">
          <form id="study-interest-form" onSubmit={handleSubmit}>
            <div className="input">
              <label className="bold" for="studyInterest">What do you want to study?</label>
              <br></br>
              <input
                type="text"
                id="studyInterest"
                className="info-input"
                value={studyInterest}
                onChange={(e) => setStudyInterest(e.target.value)}
              />
            </div>

            <div className="input">
              <label className="bold" for="placeToStudy">Where do you want to study?</label>
              <br></br>
              <input
                type="text"
                id="placeToStudy"
                className="info-input"
                value={placeToStudy}
                onChange={(e) => setPlaceToStudy(e.target.value)}
              />
            </div>

            {/* <div className="input">
              <label className="bold" for="countryStudied">Which country did you study in?</label>
              <br></br>
              <input
                type="text"
                id="countryStudied"
                className="info-input"
                value={countryStudied}
                onChange={(e) => setCountryStudied(e.target.value)}
              />
            </div> */}

            <div className="input">
              <label className="bold" for="startTime">When do you want to start studying?</label>
              <br></br>
              <input
                type="date"
                id="startTime"
                className="info-input"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>

            <div className="input">
              <label className="bold" for="budgetPref">Enter your budget preference</label>
              <br></br>
              <input
                type="number"
                id="budgetPref"
                className="info-input"
                value={budgetPref}
                onChange={(e) => setBudgetPref(e.target.value)}
              />
            </div>

            <button className="submit input" type="submit">Submit and Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InterestForm;
