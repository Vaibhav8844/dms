import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop1.css";

const Desktop1 = () => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRegisterLoginTextClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="desktop-1">
      <img className="desktop-1-child" alt="" src="/line-3.svg" />
      <div className="desktop-1-item" />
      <div className="image-1-parent">
        <img className="image-1-icon" alt="" src="/image-1@2x.png" />
        <img className="image-13-icon" alt="" src="/image-13@2x.png" />
        <img className="image-15-icon" alt="" src="/image-15@2x.png" />
        <img className="image-20-icon" alt="" src="/image-20@2x.png" />
      </div>
      <div className="rectangle-parent4">
        <div className="group-child34" />
        <img className="image-19-icon" alt="" src="/image-19@2x.png" />
        <div className="rectangle-parent5">
          <div className="group-child35" />
          <b className="quick-resq">Quick ResQ</b>
        </div>
      </div>
      <div className="treznow-id-rs3-etjrdj0-unsplas">
        <img
          className="treznow-id-rs3-etjrdj0-unsplas-icon"
          alt=""
          src="/treznowidrs3etjrdj0unsplash-1@2x.png"
        />
      </div>
      <img className="pptslide-1-icon" alt="" src="/pptslide-1@2x.png" />
      <div className="desktop-1-inner" />
      <div className="join-our-mobile">JOIN OUR MOBILE APP TODAY.</div>
      <div className="rectangle-parent6" data-scroll-to="groupContainer">
        <div className="group-child36" />
        <div className="rectangle-parent7">
          <div className="group-child37" />
          <div className="group-child38" />
          <div className="group-child39" />
          <b className="fire-department">Fire Department</b>
          <b className="health-department">Health Department</b>
          <b className="police-department">Police Department</b>
        </div>
        <b className="emergency-services">EMERGENCY SERVICES</b>
      </div>
      <div className="rectangle-parent8">
        <div className="group-child40" />
        <div className="rectangle-parent9">
          <div className="group-child41" />
          <div className="group-child42" />
          <div className="group-child43" />
          <b className="fire-department1">Fire Department</b>
          <b className="health-department1">Health Department</b>
          <b className="police-department1">Police Department</b>
          <div className="group-child44" />
          <div className="group-child45" />
        </div>
        <b className="emergency-services1">EMERGENCY SERVICES</b>
        <div className="group-child46" />
      </div>
      <div className="desktop-1-child1" />
      <div className="desktop-1-child2" />
      <div className="toll-free-no-100-parent">
        <b className="toll-free-no-100">Toll-Free No. 100</b>
        <b className="toll-free-no-101">Toll-Free No. 101</b>
        <b className="toll-free-no-108">Toll-Free No. 108</b>
        <b className="to-get-telephone">
          To get telephone number of nearest station,
        </b>
        <b className="click-here">Click Here..</b>
        <b className="click-here1">Click Here..</b>
        <b className="click-here2">Click Here..</b>
        <b className="to-get-telephone1">
          To get telephone number of nearest station,
        </b>
        <b className="to-get-telephone2">
          To get telephone number of nearest station,
        </b>
      </div>
      <div className="desktop-1-child3" />
      <div className="desktop-1-child4" />
      <div className="footer2">
        <div className="divcontainer2">
          <div className="divrow2">
            <div className="divwidget6">
              <div className="heading-42">
                <b className="know-more2">KNOW MORE</b>
              </div>
              <div className="list8">
                <div className="item14">
                  <div className="div14">●</div>
                  <div className="link-what2">What We Do</div>
                </div>
                <div className="item15">
                  <div className="div14">●</div>
                  <div className="link-what2">Our Journey</div>
                </div>
                <div className="item16">
                  <div className="div14">●</div>
                  <div className="link-what2">Leadership Team</div>
                </div>
                <div className="item17">
                  <div className="div14">●</div>
                  <div className="link-what2">Relief Manual</div>
                </div>
              </div>
              <div className="list9">
                <div className="item18">
                  <div className="div14">●</div>
                  <div className="link-what2">Donate Now</div>
                </div>
                <div className="item19">
                  <div className="div14">●</div>
                  <div className="link-what2">Contact Us</div>
                </div>
              </div>
            </div>
            <div className="divwidget7">
              <div className="heading-34">
                <b className="know-more2">Did you Know?</b>
              </div>
              <div className="list10">
                <div className="item-heading-62">
                  <div className="quick-resq-is3">{`Quick ResQ is designed to enable effecient and effective communication between releif agencies  `}</div>
                </div>
                <div className="item20">
                  <div className="heading-62">
                    <div className="quick-resq-responds-container2">
                      <p className="in-the-face">
                        Quick ResQ responds to major disasters within 24
                      </p>
                      <p className="in-the-face">hours of the event!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divwidget8">
              <div className="heading-35">
                <b className="know-more2">Get In Touch</b>
              </div>
              <div className="p2">
                <div className="quick-resq-responds-container2">
                  For all inquires and info regarding departmentts contact,
                </div>
              </div>
              <div className="divcontact-info2">
                <div className="div20">✉</div>
                <div className="infoquickresqorgin2">
                  {" "}
                  info@QuickResQ.org.in
                </div>
              </div>
              <div className="list11">
                <div className="item-link10">
                  <div className="iicon-s-facebook2">
                    <div className="symbol10"></div>
                  </div>
                </div>
                <div className="item-link11">
                  <div className="iicon-s-instagram2">
                    <div className="symbol10"></div>
                  </div>
                </div>
                <div className="item-link12">
                  <div className="iicon-s-twitter2">
                    <div className="symbol10"></div>
                  </div>
                </div>
                <div className="item-link13">
                  <div className="iicon-s-linkedin2">
                    <div className="symbol10"></div>
                  </div>
                </div>
                <div className="item-link14">
                  <div className="iicon-s-youtube2">
                    <div className="symbol10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator2">
            <div className="link-privacy2">{`Privacy Policy | Terms & Conditions`}</div>
            <div className="pcopyright2">
              <div className="copyright-2023-quickresq2">
                Copyright 2023 -QuickResQ All Rights Reserved.
              </div>
            </div>
          </div>
          <div className="pfooter-menu2" />
        </div>
      </div>
      <div className="rectangle-parent10">
        <div className="group-child47" />
        <b className="support-us">SUPPORT US</b>
      </div>
      <div className="desktop-1-child5" />
      <b className="in-the-face-container">
        <p className="in-the-face">
          In the face of a crisis often the difference between life and death is
          immediate
        </p>
        <p className="in-the-face">
          access to relief items. We are a pioneer in delivering life saving
          relief supplies on
        </p>
        <p className="in-the-face">time at scale. Help us to do more.</p>
      </b>
      <div className="vector-parent2">
        <img className="group-child48" alt="" src="/rectangle-16.svg" />
        <div className="home-parent1">
          <b className="home3">Home</b>
          <b className="about-us5" onClick={onAboutUsTextClick}>
            About Us
          </b>
          <div className="rectangle-parent11">
            <div className="group-child49" />
            <b className="registerlogin3" onClick={onRegisterLoginTextClick}>
              Register/Login
            </b>
          </div>
          <img className="icon-user3" alt="" src="/-icon-user3.svg" />
        </div>
        <div className="group-child50" />
        <img className="image-16-icon3" alt="" src="/image-161@2x.png" />
        <div className="group-child51" />
        <div className="language-parent1">
          <div className="language10">
            <p className="in-the-face">Language</p>
          </div>
          <img
            className="icon-arrow-down5"
            alt=""
            src="/-icon-arrow-down.svg"
          />
        </div>
        <div className="emergency-wrapper" onClick={onFrameContainer1Click}>
          <b className="emergency4">Emergency</b>
        </div>
      </div>
    </div>
  );
};

export default Desktop1;
