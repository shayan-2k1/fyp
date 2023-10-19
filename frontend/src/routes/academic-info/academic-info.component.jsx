import Nav2 from "../../components/nav-2/nav-2.component";
import SideBar from "../../components/sidebar/sidebar.component";
import AcademicForm from "../../components/academic-form/academic-form.component";
import { Fragment } from "react";

const AcademicInfo=()=>{
    return(
        <>
            <Nav2/>
            <SideBar/>
            <AcademicForm/>
        </>
    );
};

export default AcademicInfo;