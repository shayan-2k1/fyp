import React, { useState, useEffect } from 'react';
import './profile.styles.css'
import SideBar from "../../components/sidebar/sidebar.component";
import axios from 'axios';
import Nav1 from "../../components/nav-1/nav-1.component.jsx";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';



import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBProgress,
  MDBProgressBar,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [showEditIcon, setShowEditIcon] = useState(true);
  const [showAddBioForm, setShowAddBioForm] = useState(false);
  const [showAddBioButton, setShowAddBioButton] = useState(true);
  const [userBio, setUserBio] = useState('');
  const [bio, setBio] = useState('');
  const [expertiseList, setExpertiseList] = useState([]);
  const [expertiseForm, setExpertiseForm] = useState({ name: '' });
  const [showExpertiseForm, setShowExpertiseForm] = useState(false);
  const [interestList, setInterestList] = useState([]);
  const [interestForm, setInterestForm] = useState({ name: '' });
  const [showInterestForm, setShowInterestForm] = useState(false);
  const [languageList, setLanguageList] = useState([]);
  const [languageForm, setLanguageForm] = useState({ name: '' });
  const [showlanguageForm, setShowLanguageForm] = useState(false);
  const [showAddAboutMeForm, setShowAddAboutMeForm] = useState(false);
  const [aboutMe, setAboutMe] = useState('');

  const handleAboutMeInputChange = (e) => {
    setAboutMe(e.target.value);
  };

  const handleAddAboutMeClick = () => {
    setShowAddAboutMeForm(true);
  };

  const handleAboutMeFormSubmit = () => {
    // Handle saving the about me information
    console.log('About Me submitted:', aboutMe);

    // Update the aboutMe state or perform any necessary actions
    setAboutMe(aboutMe);

    // Hide the form after submission
    setShowAddAboutMeForm(false);
  };

  const handleCancelAboutMe = () => {
    // Handle canceling the form and reset any form-related state
    setShowAddAboutMeForm(false);
    setAboutMe('');
  };
  const handleAddExpertiseClick = () => {
    setShowExpertiseForm(true);
  };

  const handleExpertiseInputChange = (e) => {
    setExpertiseForm({ name: e.target.value });
  };

  const handleCancelExpertise = () => {
    setShowExpertiseForm(false);
    setExpertiseForm({ name: '' });
  };
  const handleAddInterestClick = () => {
    setShowInterestForm(true);
  };

  const handleInterestInputChange = (e) => {
    setInterestForm({ name: e.target.value });
  };

  const handleCancelInterest = () => {
    setShowInterestForm(false);
    setInterestForm({ name: '' });
  };
  const handleAddLanguageClick = () => {
    setShowLanguageForm(true);
  };

  const handleLanguageInputChange = (e) => {
    setLanguageForm({ name: e.target.value });
  };

  const handleCancelLanguage = () => {
    setShowLanguageForm(false);
    setLanguageForm({ name: '' });
  };


  useEffect(() => {
    // Fetch expertise from the backend when the component mounts
    fetchExpertise();
    fetchInterest();
    fetchLanguage();
  }, []);

  const fetchExpertise = async () => {
    try {
      // Fetch expertise from the backend
      const response = await axios.get('http://localhost:3000/profile/get-expertise');
      setExpertiseList(response.data);


    } catch (error) {
      console.error('Error fetching expertise:', error);
    }
  };

  const handleExpertiseFormSubmit = async () => {
    try {
      // Make API call to save expertise on the backend
      await axios.post('http://localhost:3000/profile/add-expertise', {
        expertise: [expertiseForm.name], // Assuming expertiseForm.name is a string
      });

      // Update UI with the newly added expertise
      fetchExpertise();

      // Reset form field
      setExpertiseForm({
        name: '',
      });

      // Hide expertise form after submission
      setShowExpertiseForm(false);
    } catch (error) {
      console.error('Error adding expertise:', error);
    }
  };
  const fetchInterest = async () => {
    try {
      // Fetch expertise from the backend
      const response = await axios.get('http://localhost:3000/profile/get-interest');
      setInterestList(response.data);


    } catch (error) {
      console.error('Error fetching Interest:', error);
    }
  };

  const handleInterestFormSubmit = async () => {
    try {
      // Make API call to save expertise on the backend
      await axios.post('http://localhost:3000/profile/add-interest', {
        interest: [interestForm.name], 
      });

      // Update UI with the newly added expertise
      fetchInterest();

      // Reset form field
      setInterestForm({
        name: '',
      });

      // Hide expertise form after submission
      setShowInterestForm(false);
    } catch (error) {
      console.error('Error adding interest:', error);
    }
  };

  const fetchLanguage = async () => {
    try {
      // Fetch expertise from the backend
      const response = await axios.get('http://localhost:3000/profile/get-interest');
      setLanguageList(response.data);


    } catch (error) {
      console.error('Error fetching Language:', error);
    }
  };

  const handleLanguageFormSubmit = async () => {
    try {
      // Make API call to save expertise on the backend
      await axios.post('http://localhost:3000/profile/add-interest', {
        language: [languageForm.name], 
      });

      // Update UI with the newly added expertise
      fetchLanguage();

      // Reset form field
      setLanguageForm({
        name: '',
      });

      // Hide expertise form after submission
      setShowLanguageForm(false);
    } catch (error) {
      console.error('Error adding Language:', error);
    }
  };

  const handleBioFormSubmit = () => {
    console.log('Bio submitted:', bio);
    setUserBio(bio);
    setShowAddBioForm(false);
    
  };

  const handleFileChange = async (event) => {
    try {
      const file = event.target.files[0];
      setProfilePicture(file);
     

      const formData = new FormData();
      formData.append('profilePicture', file);

      const response = await axios.post(
        'http://localhost:3000/profile/add-picture',
        formData
      );

      if (response.status >= 200 && response.status < 300) {
        console.log('File uploaded successfully');
        console.log(response.data);
      } else {
        console.error('Unexpected response:', response);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleEditClick = () => {
    setShowAddBioForm(true);
    setShowEditIcon(false);
    setShowAddBioButton(false);
    setBio(userBio); // Populate the bio in the textarea for editing
  };

  return (
    <>

      <Nav1 />
      <SideBar />
      <section style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  {!profilePicture && (
                    <label htmlFor="upload-input">
                      <IconButton
                        component="span"
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          zIndex: 1,
                        }}
                      >
                        <CloudUploadIcon fontSize="large" />
                      </IconButton>
                    </label>
                  )}
                  {profilePicture && (
                    <div style={{ position: 'relative' }}>
                      <MDBCardImage
                        src={URL.createObjectURL(profilePicture)}
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '250px', height: '250px' }}
                        fluid

                      />
                    </div>
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    id="upload-input"
                  />
                  {/* {showAddBioForm && (
                    <div key="bio-form">
                      <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Enter your bio"
                      />
                      <button
                        className="btn btn-link"
                        onClick={handleBioFormSubmit}
                      >
                        Save Bio
                      </button>
                    </div>
                  )} */}
                  {/* {!showAddBioForm && showEditIcon && (
                    <IconButton
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        backgroundColor: 'rgba(255,255,255,0.7)',
                        zIndex: 1,
                      }}
                      onClick={handleEditClick}
                    >
                      <EditIcon fontSize="large" />
                    </IconButton>
                  )} */}
                  <MDBCardText className="text-muted">{userBio}</MDBCardText>
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn>Follow</MDBBtn>
                    <MDBBtn outline className="ms-1">
                      Message
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardText className="text-muted">Expertise:</MDBCardText>
                  <MDBListGroup flush>
                    {expertiseList.flat().map((expertise, index) => (
                      <div key={index} className="expertise-item">
                        <MDBRow>
                          <MDBCol sm="12">
                            <MDBCardText>{expertise}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        {index < expertiseList.flat().length - 1 && <hr />}
                      </div>
                    ))}
                  </MDBListGroup>
                  {showExpertiseForm && (
                    <div className="expertise-form">
                      <input
                        type="text"
                        placeholder="Add expertise"
                        value={expertiseForm.name}
                        onChange={handleExpertiseInputChange}
                        style={{ height: '50px', width: '150px' }}
                      />
                      <br />
                      <button className="btn btn-success" onClick={handleExpertiseFormSubmit}>
                        Save
                      </button>
                      <button className="btn btn-secondary ms-2" onClick={handleCancelExpertise}>
                        Cancel
                      </button>
                    </div>
                  )}
                  {!showExpertiseForm && (
                    <button className="btn btn-primary mt-3" onClick={handleAddExpertiseClick}>
                      Add Expertise
                    </button>
                  )}






                </MDBCardBody>
              </MDBCard>



              <MDBCard className="mb-4 mb-md-0 c1">
                <MDBCardBody>
                  <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                  <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                  </MDBProgress>

                  <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                  </MDBProgress>

                  <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                  </MDBProgress>

                  <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                  </MDBProgress>


                </MDBCardBody>
              </MDBCard>
              <MDBCard className="mb-4 mb-md-0 c1 ">
                <MDBCardBody>
                  <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                  <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                  </MDBProgress>

                  <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                  </MDBProgress>

                  <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                  </MDBProgress>

                  <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                  </MDBProgress>

                  <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                  </MDBProgress>
                </MDBCardBody>
              </MDBCard>


            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">example@example.com</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />


                </MDBCardBody>
              </MDBCard>
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="12">
                      <MDBCardText className="text-muted">About Me</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      {showAddAboutMeForm ? (
                        <textarea
                          value={aboutMe}
                          onChange={handleAboutMeInputChange}
                          placeholder="Write something about yourself..."
                          style={{ width: '100%', minHeight: '120px' }}
                        />
                      ) : (
                        <MDBCardText className="text-muted">{aboutMe}</MDBCardText>
                      )}
                    </MDBCol>
                    <MDBCol sm="3">
                      {showAddAboutMeForm ? (
                        <>
                          <button className="btn btn-link" onClick={handleAboutMeFormSubmit}>
                            Save About Me
                          </button>
                          <button className="btn btn-link" onClick={handleCancelAboutMe}>
                            Cancel
                          </button>
                        </>
                      ) : (
                        <button
                          className="btn btn-link"
                          onClick={handleAddAboutMeClick}
                        >
                          Add About Me
                        </button>
                      )}
                    </MDBCol>
                  </MDBRow>




                </MDBCardBody>
              </MDBCard>
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">example@example.com</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

              <MDBRow>
                <MDBCol md="6">
                <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardText className="text-muted">Interest:</MDBCardText>
                  <MDBListGroup flush>
                    {interestList.flat().map((interest, index) => (
                      <div key={index} className="expertise-item">
                        <MDBRow>
                          <MDBCol sm="12">
                            <MDBCardText>{interest}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        {index < interestList.flat().length - 1 && <hr />}
                      </div>
                    ))}
                  </MDBListGroup>
                  {showInterestForm && (
                    <div className="expertise-form">
                      <input
                        type="text"
                        placeholder="Add interest"
                        value={interestForm.name}
                        onChange={handleInterestInputChange}
                        style={{ height: '50px', width: '150px' }}
                      />
                      <br />
                      <button className="btn btn-success" onClick={handleInterestFormSubmit}>
                        Save
                      </button>
                      <button className="btn btn-secondary ms-2" onClick={handleCancelInterest}>
                        Cancel
                      </button>
                    </div>
                  )}
                  {!showInterestForm && (
                    <button className="btn btn-primary mt-3" onClick={handleAddInterestClick}>
                      Add Interest
                    </button>
                  )}
            </MDBCardBody>
              </MDBCard>
                </MDBCol>

                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                      <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                      </MDBProgress>

                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                      </MDBProgress>

                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                      </MDBProgress>

                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                      </MDBProgress>

                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer >
      </section >
    </>
  );

};

export default Profile;
