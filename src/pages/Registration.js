import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRegisterLoginTextClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <div className="registration">
      <div className="vector-group">
        <img className="group-child12" alt="" src="/rectangle-16.svg" />
        <div className="home-group">
          <b className="home1" onClick={onHomeTextClick}>
            Home
          </b>
          <b className="emergency2">Emergency</b>
          <b className="about-us3" onClick={onAboutUsTextClick}>
            About Us
          </b>
          <div className="rectangle-container">
            <div className="group-child13" />
            <b className="registerlogin1" onClick={onRegisterLoginTextClick}>
              Register/Login
            </b>
          </div>
          <img className="icon-user1" alt="" src="/-icon-user1.svg" />
        </div>
        <div className="group-child14" />
        <img className="image-16-icon1" alt="" src="/image-16@2x.png" />
        <div className="group-child15" />
        <div className="language-container">
          <div className="language6">
            <p className="language7">Language</p>
          </div>
          <img
            className="icon-arrow-down3"
            alt=""
            src="/-icon-arrow-down.svg"
          />
        </div>
      </div>
      <div className="registration-child" />
      <div className="gender">
        <span className="gender-txt">
          <span>Gender</span>
          <span className="span">*</span>
        </span>
      </div>
      <div className="register-wrapper">
        <b className="register1">Register</b>
      </div>
      <div className="group-div">
        <div className="group-child16" />
        <div className="group-child17" />
        <div className="group-child18" />
        <div className="group-child19" />
        <div className="group-child20" />
      </div>
      <div className="rectangle-parent1">
        <div className="group-child21" />
        <div className="group-child22" />
        <div className="group-child23" />
        <div className="group-child24" />
      </div>
      <div className="email-id-parent">
        <div className="email-id">
          <span className="gender-txt">
            <span>Email Id</span>
            <span className="span1">*</span>
          </span>
        </div>
        <div className="uididentity-proof">UID(identity proof)</div>
        <div className="phone-no">
          <span className="gender-txt">
            <span>Phone no.</span>
            <span className="span1">*</span>
          </span>
        </div>
        <div className="profession">
          <span className="gender-txt">
            <span>Profession</span>
            <span className="span">*</span>
          </span>
        </div>
        <div className="address">
          <span className="gender-txt">
            <span>Address</span>
            <span className="span4">*</span>
          </span>
        </div>
        <i className="for-rescue-personnel">For Rescue personnel</i>
        <div className="state-of-residence-container">
          <span className="gender-txt">
            <span>State of Residence</span>
            <span className="span4">*</span>
          </span>
        </div>
        <div className="first-name">
          <span className="gender-txt">
            <span>First Name</span>
            <span className="span4">*</span>
          </span>
        </div>
        <div className="last-name">
          <span className="gender-txt">
            <span>Last Name</span>
            <span className="span4">*</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Registration;
