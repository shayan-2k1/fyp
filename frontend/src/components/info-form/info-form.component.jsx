import "./info-form.styles.css";
import { useNavigate } from "react-router-dom";

const InfoForm=()=>{

    const navigate=useNavigate();

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
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                {/* <!-- ... continue to 31 --> */}
                                </select>
                                <select className="month" name="month" id="month">
                                    <option value="" disabled selected>Month</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                {/* <!-- ... continue to December --> */}
                                </select>
                                <select className="year" name="year" id="year">
                                    <option value="" disabled selected>Year</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>

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

                        <button className='submit input' type="submit" onClick={()=>{navigate('/academic-info')}}>Submit and Continue</button>


                    </form>
                </div>
            </div>

        </div>
   ); 
};

export default InfoForm;