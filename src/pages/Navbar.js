import { Link,useNavigate } from "react-router-dom";

import "./Navbar.css";

const scrollToContact = () => {
  const contactSection = document.getElementById("contact-us");
  contactSection.scrollIntoView({ behavior: "smooth" });
}
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className="navbar">
      <div className="logo">
        <img
          className="microsoftteams-image-1-icon"
          alt=""
          src="/microsoftteamsimage-1@2x.png"
        />
        <div className="learnzy1">Learnzy</div>
      </div>
      <div className="navigations">
        <div className="about">
        <a className="about">
          <Link
            to = "/Aboutus"
            style={{ color: "inherit", textDecoration: "none" }}>
              About
            </Link> 
        </a>
        </div>
        <div className="why-us">
        <a>
          <Link
            to = "/Whyus"
            style={{ color: "inherit", textDecoration: "none" }}>
              Why us
            </Link> 
        </a>
        </div>
        
        <div className="contact">
        <a className="contact">
          <Link
            to="/#contact-us"
            // to = "/Contact"
            onClick={scrollToContact} 
            style={{ color: "inherit", textDecoration: "none" }}>
              Contact
            </Link> 
        </a>
        </div>
      </div>
      <div className="loinsignup">
        <button onClick={()=>navigate("/StudentLogin")}className="student-loginsignup">
          <button className="student-loginsignup-child" />
          <a className="start-learning">
            
          <Link to="/StudentLogin"
              style={{ color: "inherit", textDecoration: "none" }}>
              Start Learning
            </Link>
            
            
            </a>
        </button>
        <button onClick={()=>navigate("/TutorLogin")} className="tutor-loginsignup">
          <button className="tutor-loginsignup-child" />
         
          <a className="start-learning">
            <Link
              to="/TutorLogin"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Start Teaching
            </Link>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
 