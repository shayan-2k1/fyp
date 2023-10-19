import { useNavigate } from "react-router-dom";
import "./academic-form.styles.css";
import { useState } from "react";
import axios from "axios";

const AcademicForm=()=>{
    const [degree,setDegree]=useState('');
    const [discipline,setDiscipline]=useState('');
    const [country, setCountry]=useState('');
    const [university, setUniversity]=useState('');
    const [gpa, setGpa]=useState(0);
    const [year, setYear]=useState(0);
    const [error, setError]=useState(null);
    const [loading,setLoading]=useState('');
    
    const navigate=useNavigate();

    const handleSubmit=()=>{
        try
        {
            const response=axios.post("http://localhost:3000/academic/info",{
                degree:degree,
                discipline:discipline,
                country:country,
                university:university,
                GPA:gpa,
                yearOfCompletion:year,
            });
        setLoading=('true');
        console.log(response.data);
        navigate('/study-interest');
        }
        catch(error){
            setError(error);
        }
        setLoading('false');
    }
    
    return(
        <div className="component">
            <div className="container">
                <h1 id="title">ACADEMIC BACKGROUND</h1>
                <div className="formDiv">
                    <form id="personal-info" onSubmit={handleSubmit}> 

                        <div className="input">
                            <label  className="bold" for="input-1">Degree Level</label>
                            <br></br>
                            <input type="text" id="input-1" className="info-input" onChange={(e)=>
                            {
                                setDegree(e.target.value);
                            }}/>
                        </div>

                        <div className="input">
                            <label className="bold" for="input-2">What discipline did you study?</label>
                            <br></br>
                            <input type="text" id="input-2"  className="info-input" onChange={(e)=>{
                                setDiscipline(e.target.value);
                            }}/>
                        </div>

                        <div className="input">
                            <label className="bold" for="input-2">Which country did you study in?</label>
                            <br></br>
                            <input type="text" id="input-2" className="info-input" onChange={(e)=>{
                                setCountry(e.target.value);
                            }}/>
                        </div>

                        <div className="input">
                            <label className="bold" for="input-2">University name</label>
                            <br></br>
                            <input type="text" id="input-2"  className="info-input" onChange={(e)=>{
                                setUniversity(e.target.value);
                            }}/>
                        </div>

                        <div className="input">
                            <label className="bold" for="input-2">GPA</label>
                            <br></br>
                            <input type="number" id="input-2"  className="info-input" max={4} min={0} onChange={(e)=>{
                                setGpa(e.target.value);
                            }}/>
                        </div>

                        <div className="input">
                            <label className="bold" for="input-2">Year of Completion</label>
                            <br></br>
                            <input type="number" id="input-2"  className="info-input" onChange={(e)=>{
                                setYear(e.target.value);
                            }}/>
                        </div>
                        <button className='submit input' type="submit">Submit and Continue</button>
                    </form>
                </div>
            </div>
        </div>
   ); 
};

export default AcademicForm;