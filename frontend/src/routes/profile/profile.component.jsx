import React, { useState } from 'react';
import './profile.styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import Profilepic from '../../assets/profile.png';

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [aboutAlina, setAboutAlina] = useState('');
  const [isAboutVisible, setAboutVisible] = useState(false);

  const handleAddInfo = () => {
    const name = prompt('Enter name:');
    const email = prompt('Enter email:');
    const contact = prompt('Enter contact:');

    if (name && email && contact) {
      setUserInfo({ name, email, contact });
    }
  };

  const handleAboutButtonClick = () => {
    const about = prompt('Enter about Alina:');
    if (about) {
      setAboutAlina(about);
      setAboutVisible(true);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="card-container">
            <div className="card">
              <div className="avatar">
                <img src={Profilepic} alt="image not found" />
              </div>
            </div>
            <div className="card card2">
              <div className="button-container">
                <button onClick={handleAddInfo} className="add-button">
                  Add Info
                </button>
              </div>
              <div className="info">
                {userInfo && (
                  <div>
                    <p><strong>Name:</strong></p>
                    <p>{userInfo.name}</p>
                    <p><strong>Email:</strong></p>
                    <p>{userInfo.email}</p>
                    <p><strong>Contact:</strong></p>
                    <p>{userInfo.contact}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="card-container">
            <div className="card3">
              <h2>Professional Details</h2>
              <p>BS CS from FAST</p>
              <h2>Skills</h2>
              <ul>
                <li>Software Engineering</li>
                <li>Web Development</li>
                <li>Database Management</li>
                {/* Add more skills here */}
              </ul>
            </div>
            <div className="card2">
             <h1>About </h1>
              <button onClick={handleAboutButtonClick} className="add-button">
                Add About 
              </button>
              {isAboutVisible && (
                <div>
                 
                  <p>{aboutAlina}</p>
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="card-container">
            <div className="card2">
              <h2>Card 5</h2>
              <p>This is the content of Card 5.</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="card-container">
            <div className="card2">
              <h2>Card 6</h2>
              <p>This is the content of Card 6.</p>
            </div>
          </div>
        </Col>
      </Row>
      <div className="row">
        <div className="column">
          <div className="card">
            <h2>Card 7</h2>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h2>Card 8</h2>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h2>Card 9</h2>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
