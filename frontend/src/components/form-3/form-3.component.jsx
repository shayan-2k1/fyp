import "./form-3.styles.css";

const Form3=()=>{

    return(
        <div class="component">
            <div class="container">
                <h1 id="title">PERSONAL INFORMATION</h1>
                <div class="formDiv">
                    <form id="personal-info"> 

                        <div class="input">
                            <label  class="bold" for="input-1">First Name</label>
                            <br></br>
                            <input type="text" id="input-1" class="info-input" />
                        </div>

                        <div class="input">
                            <label class="bold" for="input-2">Last Name</label>
                            <br></br>
                            <input type="text" id="input-2"  class="info-input"/>
                        </div>

                        <div class="input">
                            <label class="bold" for="input-2">Contact Number</label>
                            <br></br>
                            <input type="tel" class="phone info-input" id="input-2" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                        </div>

                        <div class="input">
                            <label class="bold" for="input-2">Gender</label>
                            <br></br>
                            <input type="text" id="input-2"  class="info-input" />
                        </div>

                        <div class="input">
                            <label class="bold" for="input-2">Address</label>
                            <br></br>
                            <input type="text" id="input-2"  class="info-input"/>
                        </div>

                        <div class="input">
                            <label class="bold" for="input-2">Country Of Residence</label>
                            <br></br>
                            <input type="text" id="input-2"  class="info-input" />
                        </div>


                        <div class="select-date input">
                            <label class="bold" for="input-2">Select Date of Birth</label>
                            <br></br>
                            <div class="date-selector">
                            
                                <select class="day" name="day" id="day">
                                    <option value="" disabled selected>Day</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                {/* <!-- ... continue to 31 --> */}
                                </select>
                                <select class="month" name="month" id="month">
                                    <option value="" disabled selected>Month</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                {/* <!-- ... continue to December --> */}
                                </select>
                                <select class="year" name="year" id="year">
                                    <option value="" disabled selected>Year</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                {/* <!-- ... continue to future years --> */}
                                </select>
                            </div>
                        </div>

                        <div class="nationality-selector input">
                            <label class="bold" for="input-2">Nationality</label>
                            <br></br>
                            <select class="national-selector" name="national-country" id="N-country">
                                <option value="" disabled selected>Pakistani</option>
                                <option value="1">American</option>
                                <option value="2">Bristish</option>
                            {/* <!-- ... continue--> */}
                            </select>
                    
                        </div>

                        <button class='submit input' type="submit">SIGN IN</button>


                    </form>
                </div>
            </div>

        </div>
   ); 
};

export default Form3;