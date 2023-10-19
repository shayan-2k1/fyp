import "./study-interest.styles.css";

const InterestForm=()=>{
    return(
        <div className="component">
            <div className="container">
                <h1 id="title">STUDY INTEREST</h1>
                <div className="formDiv">
                    <form id="personal-info"> 

                        <div className="input">
                            <label  className="bold" for="input-1">What do you want to study?</label>
                            <br></br>
                            <input type="text" id="input-1" className="info-input" />
                        </div>

                        <div className="input">
                            <label className="bold" for="input-2">Where do you want to study?</label>
                            <br></br>
                            <input type="text" id="input-2"  className="info-input"/>
                        </div>

                        <div className="input">
                            <label className="bold" for="input-2">Which country did you study in?</label>
                            <br></br>
                            <input type="text" id="input-2" className="info-input"/>
                        </div>

                        <div className="input">
                            <label className="bold" for="input-2">When do you want to start studying?</label>
                            <br></br>
                            <input type="date" id="input-2"  className="info-input" />
                        </div>

                        <div className="input">
                            <label className="bold" for="input-2">Enter your budget preference</label>
                            <br></br>
                            <input type="number" id="input-2"  className="info-input"/>
                        </div>
                        <button className='submit input' type="submit">Submit and Finish</button>
                    </form>
                </div>
            </div>
        </div>
   ); 
};

export default InterestForm;