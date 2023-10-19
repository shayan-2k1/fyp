import { useNavigate } from "react-router-dom";
import "./academic-form.styles.css";

const AcademicForm=()=>{
    const navigate=useNavigate();
    
    return(
        <div className="component">
            <div className="container">
                <h1 id="title">ACADEMIC BACKGROUND</h1>
                <div className="formDiv">
                    <form id="personal-info"> 

                        <div className="input">
                            <label  className="bold" for="input-1">Degree Level</label>
                            <br></br>
                            <input type="text" id="input-1" className="info-input" />
                        </div>

                        <div className="input">
                            <label className="bold" for="input-2">What discipline did you study?</label>
                            <br></br>
                            <input type="text" id="input-2"  className="info-input"/>
                        </div>

                        <div className="input">
                            <label className="bold" for="input-2">Which country did you study in?</label>
                            <br></br>
                            <input type="text" id="input-2" className="info-input"/>
                        </div>

                        <div className="input">
                            <label className="bold" for="input-2">University name</label>
                            <br></br>
                            <input type="text" id="input-2"  className="info-input" />
                        </div>

                        <div className="input">
                            <label className="bold" for="input-2">GPA</label>
                            <br></br>
                            <input type="number" id="input-2"  className="info-input" max={4} min={0}/>
                        </div>

                        <div className="input">
                            <label className="bold" for="input-2">Year of Completion</label>
                            <br></br>
                            <input type="number" id="input-2"  className="info-input" />
                        </div>
                        <button className='submit input' type="submit" onClick={()=>{
                            navigate("/study-interest");
                        }}>Submit and Continue</button>
                    </form>
                </div>
            </div>
        </div>
   ); 
};

export default AcademicForm;