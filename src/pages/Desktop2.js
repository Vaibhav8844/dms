import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Desktop2.css";

const Desktop2 = () => {
  const navigate = useNavigate();

  const onHomeClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRegisterLoginTextClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onNewUserClick = useCallback(() => {
    navigate("/registration");
  }, [navigate]);

  return (
    <div className="desktop-2">
      <div className="vector-container">
        <img className="group-child25" alt="" src="/rectangle-16.svg" />
        <div className="home-container">
          <Button className="home2" onClick={onHomeClick} />
          <b className="emergency3">Emergency</b>
          <b className="about-us4" onClick={onAboutUsTextClick}>
            About Us
          </b>
          <div className="rectangle-parent2">
            <div className="group-child26" />
            <b className="registerlogin2" onClick={onRegisterLoginTextClick}>
              Register/Login
            </b>
          </div>
          <img className="icon-user2" alt="" src="/-icon-user2.svg" />
        </div>
        <div className="group-child27" />
        <img className="image-16-icon2" alt="" src="/image-16@2x.png" />
        <div className="group-child28" />
        <div className="frame-div">
          <div className="language8">
            <p className="language9">Language</p>
          </div>
          <img
            className="icon-arrow-down4"
            alt=""
            src="/-icon-arrow-down.svg"
          />
        </div>
      </div>
      <div className="rectangle-parent3">
        <div className="group-child29" />
        <div className="group-child30" />
        <img className="group-child31" alt="" src="/rectangle-21.svg" />
        <div className="group-child32" />
        <img className="image-18-icon" alt="" src="/image-18@2x.png" />
        <div className="otp">OTP:</div>
        <div className="mobile-number">Mobile Number:</div>
        <div className="password">Password:</div>
        <div className="new-user-container" onClick={onNewUserClick}>
          <span className="new-user-container1">
            <span>{`New User? | `}</span>
            <span className="register-here">Register here</span>
          </span>
        </div>
        <div className="vector-parent1">
          <img className="group-child33" alt="" src="/rectangle-23.svg" />
          <div className="login">Login</div>
        </div>
        <Button className="group-button" variant="primary">
          Sign In
        </Button>
        <Button className="frame-button" />
      </div>
    </div>
  );
};

export default Desktop2;
