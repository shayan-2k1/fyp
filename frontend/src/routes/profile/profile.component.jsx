import React, { useState } from 'react';
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
  // MDBIcon,
  // MDBListGroup,
  // MDBListGroupItem
} from 'mdb-react-ui-kit';

const Profile = () => {
  
  const [profilePicture, setProfilePicture] = useState(null);
  const [showEditIcon, setShowEditIcon] = useState(false);
  const [showAddBioForm, setShowAddBioForm] = useState(false);
  const [userBio, setUserBio] = useState("");
 const [bio, setBio] = useState("");
  const handleAddBioClick = () => {
    setShowAddBioForm(true);
  };

  const handleBioFormSubmit = () => {
    // Handle the submission of bio form data, e.g., send it to the server
    console.log('Bio submitted:', bio);
    setUserBio(bio);
    setShowAddBioForm(false);
    setShowEditIcon(true);
  };
  const handleFileChange = async (event) => {
    try {
      const file = event.target.files[0];
      setProfilePicture(file);
      setShowEditIcon(true);

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
    // Handle edit click (e.g., show file input again)
    
  };

  return (
   <>
   
   <Nav1/>
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
                style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1 }}
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
                onMouseEnter={() => setShowEditIcon(true)}
                onMouseLeave={() => setShowEditIcon(false)}
              />
              {showEditIcon && (
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
              )}
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id="upload-input"
          />
           {showAddBioForm ? (
                  <div key="bio-form">
                    <textarea
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder="Enter your bio"
                    />
                    <button className="btn btn-link" onClick={handleBioFormSubmit}>
                      Save Bio
                    </button>
                  </div>
                ) : (
                  <button className="btn btn-link" onClick={handleAddBioClick}>
                    Add Bio
                  </button>
                )}
                 <MDBCardText className="text-muted">{userBio}</MDBCardText>
          <div className="d-flex justify-content-center mb-2">
            <MDBBtn>Follow</MDBBtn>
            <MDBBtn outline className="ms-1">
              Message
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                {/* <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup> */}
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
      </MDBContainer>
    </section>
    </>
  );

};

export default Profile;
