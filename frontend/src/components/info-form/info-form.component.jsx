import "./info-form.styles.css";

const InfoForm=()=>{

    return(
        <div className="component">
            <div className="container">
                <h1 id="title">PERSONAL INFORMATION</h1>
                <div className="formDiv">
                    <form id="personal-info"> 

                        <div className="input">
                            <label  className="bold" for="input-1">First Name</label>
                            <br></br>
                            <input type="text" id="input-1" className="info-input" />
                        </div>

                        <div className="input">
                            <label className="bold" for="input-2">Last Name</label>
                            <br></br>
                            <input type="text" id="input-2"  className="info-input"/>
                        </div>

                        <div className="input">
                            <label className="bold" for="input-2">Contact Number</label>
                            <br></br>
                            <input type="tel" className="phone info-input" id="input-2" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                        </div>

                        <div className="input">
                            <label className="bold" for="input-2">Gender</label>
                            <br></br>
                            <input type="text" id="input-2"  className="info-input" />
                        </div>

                        <div className="input">
                            <label className="bold" for="input-2">Address</label>
                            <br></br>
                            <input type="text" id="input-2"  className="info-input"/>
                        </div>

                        <div className="input">
                            <label className="bold" for="input-2">Country of Residence</label>
                            <br></br>
                            <input type="text" id="input-2"  className="info-input" />
                        </div>


                        <div className="select-date input">
                            <label className="bold" for="input-2">Select Date of Birth</label>
                            <br></br>
                            <div className="date-selector">
                            
                                <select className="day" name="day" id="day">
                                    <option value="" disabled selected>Day</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                {/* <!-- ... continue to 31 --> */}
                                </select>
                                <select className="month" name="month" id="month">
                                    <option value="" disabled selected>Month</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                {/* <!-- ... continue to December --> */}
                                </select>
                                <select className="year" name="year" id="year">
                                    <option value="" disabled selected>Year</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                {/* <!-- ... continue to future years --> */}
                                </select>
                            </div>
                        </div>

                        <div className="nationality-selector input">
                            <label className="bold" for="input-2">Nationality</label>
                            <br></br>
                            <select className="national-selector" name="national-country" id="N-country">
                                <option value="" disabled selected>Pakistani</option>
                                <option value="1">American</option>
                                <option value="2">British</option>
                            {/* <!-- ... continue--> */}
                            </select>
                    
                        </div>

                        <button className='submit input' type="submit">Submit and Continue</button>


                    </form>
                </div>
            </div>

        </div>
   ); 
};

export default InfoForm;