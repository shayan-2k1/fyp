import React, { useState } from 'react';
// import './profile.styles.css';
// import { Container, Row, Col } from 'react-bootstrap';
// import Profilepic from '../../assets/profile.png';

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
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
  
const Profile = () => {
  // const [userInfo, setUserInfo] = useState(null);
  // const [aboutAlina, setAboutAlina] = useState('');
  // const [isAboutVisible, setAboutVisible] = useState(false);

  // const handleAddInfo = () => {
  //   const name = prompt('Enter name:');
  //   const email = prompt('Enter email:');
  //   const contact = prompt('Enter contact:');

  //   if (name && email && contact) {
  //     setUserInfo({ name, email, contact });
  //   }
  // };

  // const handleAboutButtonClick = () => {
  //   const about = prompt('Enter about Alina:');
  //   if (about) {
  //     setAboutAlina(about);
  //     setAboutVisible(true);
  //   }
  // };
  
  
    return (
      <section style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="py-5">
          
  
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid />
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn>Follow</MDBBtn>
                    <MDBBtn outline className="ms-1">Message</MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
  
              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
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
                  </MDBListGroup>
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
    );
 
  // return (
  //   <Container>
  //     <Row>
  //       <Col>
  //         <div className="card-container">
  //           <div className="card">
  //             <div className="avatar">
  //               <img src={Profilepic} alt="image not found" />
  //             </div>
  //           </div>
  //           <div className="card card2">
  //             <div className="button-container">
  //               <button onClick={handleAddInfo} className="add-button">
  //                 Add Info
  //               </button>
  //             </div>
  //             <div className="info">
  //               {userInfo && (
  //                 <div>
  //                   <p><strong>Name:</strong></p>
  //                   <p>{userInfo.name}</p>
  //                   <p><strong>Email:</strong></p>
  //                   <p>{userInfo.email}</p>
  //                   <p><strong>Contact:</strong></p>
  //                   <p>{userInfo.contact}</p>
  //                 </div>
  //               )}
  //             </div>
  //           </div>
  //         </div>
  //       </Col>
  //     </Row>
  //     <Row>
  //       <Col>
  //         <div className="card-container">
  //           <div className="card3">
  //             <h2>Professional Details</h2>
  //             <p>BS CS from FAST</p>
  //             <h2>Skills</h2>
  //             <ul>
  //               <li>Software Engineering</li>
  //               <li>Web Development</li>
  //               <li>Database Management</li>
  //               {/* Add more skills here */}
  //             </ul>
  //           </div>
  //           <div className="card2">
  //            <h1>About </h1>
  //             <button onClick={handleAboutButtonClick} className="add-button">
  //               Add About 
  //             </button>
  //             {isAboutVisible && (
  //               <div>
                 
  //                 <p>{aboutAlina}</p>
  //               </div>
  //             )}
  //           </div>
  //         </div>
  //       </Col>
  //     </Row>
  //     <Row>
  //       <Col>
  //         <div className="card-container">
  //           <div className="card2">
  //             <h2>Card 5</h2>
  //             <p>This is the content of Card 5.</p>
  //           </div>
  //         </div>
  //       </Col>
  //     </Row>
  //     <Row>
  //       <Col>
  //         <div className="card-container">
  //           <div className="card2">
  //             <h2>Card 6</h2>
  //             <p>This is the content of Card 6.</p>
  //           </div>
  //         </div>
  //       </Col>
  //     </Row>
  //     <div className="row">
  //       <div className="column">
  //         <div className="card">
  //           <h2>Card 7</h2>
  //         </div>
  //       </div>
  //       <div className="column">
  //         <div className="card">
  //           <h2>Card 8</h2>
  //         </div>
  //       </div>
  //       <div className="column">
  //         <div className="card">
  //           <h2>Card 9</h2>
  //         </div>
  //       </div>
  //     </div>
  //   </Container>
  // );
};

export default Profile;
