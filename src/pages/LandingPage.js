import { Link } from "react-router-dom";
import { id } from "date-fns/locale";
import Navbar from "./Navbar";
import "./LandingPage.css";


const LandingPage = () => {
  return (
    <div className="landing-page">
      <img className="shade-footer-icon" alt="" src="/ellipse-6.svg" />
      <img className="shade-attention4-icon" alt="" src="" />
      <img className="shade-attention3-icon" alt="" src="" />
      <img className="shade-navbar-icon" alt="" src="" />
      <div className="attention-6" id="contact-us">
        <img className="attention-6-child" alt="" src="/rectangle-7@2x.png" />
        <div className="social-media">
          <img className="twitter-icon" alt="" src="/twitter.svg" />
          <img className="instagram-icon" alt="" src="/instagram.svg" />
          <img className="facebook-icon" alt="" src="/facebook.svg" />
          <div className="social-media1">{`social media `}</div>
        </div>
        
        
           {/* {<button className="admin-login-button">
            <button className="admin-login-button-child" />

            <b className="login">
              
            <Link
              to="/AdminLogin"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Login
            </Link>
              </b>
          </button> 
        <div className="for-developersadmin">For developers/admin</div>
        </div> */}
        <div className="contact-our-offices-container">
          <p className="contact-our-offices">
            <b>contact our offices</b>
          </p>
          <p className="contact-our-offices">
            <b>&nbsp;</b>
          </p>
          <ul className="london-office-india-office-us">
            <li className="london-office">
              <span>London office</span>
            </li>
            <li className="london-office">
              <span>India Office</span>
            </li>
            <li className="london-office">
              <span>uS office</span>
            </li>
            <li>
              <span>UK office</span>
            </li>
          </ul>
        </div>
        <div className="disclaimer-learnzy-is-container">
          <b>
            <span className="disclaimer">Disclaimer</span>
            <span className="span">:</span>
          </b>
          <span>
            <span className="span">{` `}</span>
            <span className="disclaimer">Learnzy</span>
            <span className="span">
              {" "}
              is a private learning and tutoring marketplace, is should not be
              used for foul reasons and not to be outsourced in any way which
              violates the cybersecurity policies laid by the company and under
              the central law.
            </span>
          </span>
        </div>
        <img className="attention-6-item" alt="" src="/line-4@2x.png" />
        <img className="vector-icon" alt="" src="/vector.svg" />
        <div className="copyright">Copyright</div>
        <div className="all-rights-reserved">
          2023 all rights reserved by learnzY team
        </div>
        <img className="attention-6-inner" alt="" src="/line-41@2x.png" />
      </div>
      <div className="attention-5">
        <div className="testimonials">testimonials</div>
        <img className="attention-5-child" alt="" src="/rectangle-4@2x.png" />
        <img className="attention-5-item" alt="" src="/rectangle-4@2x.png" />
        <img className="attention-5-inner" alt="" src="/rectangle-4@2x.png" />
        <img className="student1-1-icon" alt="" src="/student1-1@2x.png" />
        <img className="student2-1-icon" alt="" src="/student2-1@2x.png" />
        <img className="student3-1-icon" alt="" src="/student3-1@2x.png" />
        <div className="great-learning">Great learning</div>
        <div className="best-tutoring">Best tutoring</div>
        <div className="great-platform">great platform</div>
        <div className="tony">Vineet</div>
        <div className="jenny">Nikita</div>
        <div className="pepper">Aparna</div>
      </div>
      <div className="attention-4">
        <img className="attention-4-child" alt="" src="/rectangle-3@2x.png" />
        {/* <img className="partners-icon" alt="" src="/partners.svg" /> */}
        <img className="google-icon" alt="" src="/google.svg" />
        <img className="meta-icon" alt="" src="/meta.svg" />
        <img className="linkedin-icon" alt="" src="/linkedin.svg" />
        <img className="attention-4-item" alt="" src="/line-1@2x.png" />
        <img className="attention-4-inner" alt="" src="/line-1@2x.png" />
        <div className="our-industry-partners-container">
          <span className="disclaimer">our</span>
          <span className="span"> industry partners</span>
        </div>
      </div>
      <div className="attention-3">
        <img className="attention-3-child" alt="" src="/rectangle-2@2x.png" />
        <div className="att3-student">
          <img className="student-icon" alt="" src="/student.svg" />
          <div className="students">
            <p className="p">1000+</p>
            <p className="students1">students</p>
          </div>
        </div>
        <img className="attention-3-item" alt="" src="/line-11@2x.png" />
        <div className="att3-subjects">
          <img className="subjects-icon" alt="" src="/subjects.svg" />
          <div className="subjects">
            <p className="p">50+</p>
            <p className="students1">subjects</p>
          </div>
        </div>
        <img className="attention-3-inner" alt="" src="/line-11@2x.png" />
        <div className="att3-tutors">
          <img className="student-icon" alt="" src="/tutor.svg" />
          <div className="tutors">
            <p className="p">100+</p>
            <p className="students1">Tutors</p>
          </div>
        </div>
      </div>
      <div className="attention-2">
        <div className="att2-texts">
          <div className="learn-with-the-container">
            <p className="contact-our-offices">
              <span className="disclaimer">learn</span> with the
            </p>
            <p className="contact-our-offices">tutor of your choice</p>
            <p className="contact-our-offices">
              from anywhere you want, have one - on one sessions too!!.
            </p>
          </div>
          <div className="take-classes-from-container">
            <p className="contact-our-offices">
              <span className="disclaimer">take</span>
              <span className="span"> classes from</span>
            </p>
            <p className="p">anywhere you want</p>
            <p className="p">{`with anyone want `}</p>
            <p className="p">at your ease...</p>
          </div>
        </div>
        <img className="student-image-icon" alt="" src="/student-image.svg" />
        <div className="tutor-image">
          <img className="tutor-image-child" alt="" src="/ellipse-2.svg" />
          <img className="vector-icon1" alt="" src="/vector1.svg" />
        </div>
        <div className="whats-in-it-container">
          <span className="disclaimer">what’s</span>
          <span className="span"> in it for you</span>
        </div>
      </div>
      <div className="attention-1">
        <img
          className="landing-page-img1-1-icon"
          alt=""
          src="/landing-page-img1-1@2x.png"
        />
        <div className="main-heading">
          <div className="you-can-learn-container">
            <span className="disclaimer">you</span>
            <span className="span"> can Learn or you can teach</span>
          </div>
          <div className="students-and-tutors-container">
            <p className="contact-our-offices">
              <span className="disclaimer">students</span>
              <span className="span"> and tutors,</span>
            </p>
            <p className="p">
              sit back and relax while you are able to learn and teach from
              anywhere.
            </p>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default LandingPage;