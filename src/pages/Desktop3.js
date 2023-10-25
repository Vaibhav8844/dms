import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop3.css";

const Desktop3 = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  const onRegisterLoginTextClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <div className="desktop-3">
      <div className="vector-parent">
        <img className="group-child" alt="" src="/rectangle-16.svg" />
        <div className="home-parent">
          <b className="home" onClick={onHomeTextClick}>
            Home
          </b>
          <b className="emergency">Emergency</b>
          <b className="about-us">About Us</b>
          <div className="rectangle-parent">
            <div className="group-item" />
            <b className="registerlogin" onClick={onRegisterLoginTextClick}>
              Register/Login
            </b>
            <img className="icon-user" alt="" src="/-icon-user.svg" />
          </div>
        </div>
        <div className="group-inner" />
        <img className="image-16-icon" alt="" src="/image-16@2x.png" />
        <div className="rectangle-div" />
        <div className="language-parent">
          <div className="language">
            <p className="quick-resq-responds">Language</p>
          </div>
          <img className="icon-arrow-down" alt="" src="/-icon-arrow-down.svg" />
        </div>
      </div>
      <div className="footer">
        <div className="divcontainer">
          <div className="divrow">
            <div className="divwidget">
              <div className="heading-4">
                <b className="know-more">KNOW MORE</b>
              </div>
              <div className="list">
                <div className="item">
                  <div className="div">●</div>
                  <div className="link-what">What We Do</div>
                </div>
                <div className="item1">
                  <div className="div">●</div>
                  <div className="link-what">Our Journey</div>
                </div>
                <div className="item2">
                  <div className="div">●</div>
                  <div className="link-what">Leadership Team</div>
                </div>
                <div className="item3">
                  <div className="div">●</div>
                  <div className="link-what">Relief Manual</div>
                </div>
              </div>
              <div className="list1">
                <div className="item4">
                  <div className="div">●</div>
                  <div className="link-what">Donate Now</div>
                </div>
                <div className="item5">
                  <div className="div">●</div>
                  <div className="link-what">Contact Us</div>
                </div>
              </div>
            </div>
            <div className="divwidget1">
              <div className="heading-3">
                <b className="know-more">Did you Know?</b>
              </div>
              <div className="list2">
                <div className="item-heading-6">
                  <div className="quick-resq-is">{`Quick ResQ is designed to enable effecient and effective communication between releif agencies  `}</div>
                </div>
                <div className="item6">
                  <div className="heading-6">
                    <div className="quick-resq-responds-container">
                      <p className="quick-resq-responds">
                        Quick ResQ responds to major disasters within 24
                      </p>
                      <p className="quick-resq-responds">hours of the event!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divwidget2">
              <div className="heading-31">
                <b className="know-more">Get In Touch</b>
              </div>
              <div className="p">
                <div className="quick-resq-responds-container">
                  For all inquires and info regarding departmentts contact,
                </div>
              </div>
              <div className="divcontact-info">
                <div className="div6">✉</div>
                <div className="infoquickresqorgin"> info@QuickResQ.org.in</div>
              </div>
              <div className="list3">
                <div className="item-link">
                  <div className="iicon-s-facebook">
                    <div className="symbol"></div>
                  </div>
                </div>
                <div className="item-link1">
                  <div className="iicon-s-instagram">
                    <div className="symbol"></div>
                  </div>
                </div>
                <div className="item-link2">
                  <div className="iicon-s-twitter">
                    <div className="symbol"></div>
                  </div>
                </div>
                <div className="item-link3">
                  <div className="iicon-s-linkedin">
                    <div className="symbol"></div>
                  </div>
                </div>
                <div className="item-link4">
                  <div className="iicon-s-youtube">
                    <div className="symbol"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator">
            <div className="link-privacy">{`Privacy Policy | Terms & Conditions`}</div>
            <div className="pcopyright">
              <div className="copyright-2023-quickresq">
                Copyright 2023 -QuickResQ All Rights Reserved.
              </div>
            </div>
          </div>
          <div className="pfooter-menu" />
        </div>
      </div>
      <div className="about-us-parent">
        <div className="about-us1">ABOUT US</div>
        <div className="about-us-group">
          <b className="about-us2">ABOUT US</b>
          <div className="group-child1" />
          <div className="line-div" />
          <b className="vision">VISION</b>
          <div className="group-child2" />
          <div className="group-child3" />
          <div className="quick-resq-is1">
            Quick ResQ is an application developed by Ministry of Home Affairs
            for the collaboration of all rescue departments for an efficient
            working of all department in the times of natural and man-made
            calamities.
          </div>
          <img className="line-icon" alt="" src="/line-3.svg" />
          <div className="creating-a-collaborative">
            Creating a collaborative rescue app that connects and empowers
            emergency responders, enhancing their ability to save lives and
            protect communities through seamless communication and resource
            sharing.
          </div>
          <b className="why-quick-resq">Why Quick ResQ?</b>
          <div className="india-stands-as-container">
            <p className="quick-resq-responds">
              India stands as one of the world's most disaster-prone nations,
              with 23 out of its 29 states classified as multi-disaster-prone
              regions. An extensive 40 million hectares of land in the country
              is identified as flood-prone, while approximately 57% of its total
              area is susceptible to earthquakes of varying magnitudes. Situated
              within one of the six globally recognized cyclone-prone regions,
              the Indian Ocean, India's Coromandel coastal line faces heightened
              vulnerability, experiencing the impact of nearly 80% of the
              cyclones generated in the area.
            </p>
            <p className="quick-resq-responds">&nbsp;</p>
            <p className="quick-resq-responds">
              To deal with disasters, An app dedicated to disaster management is
              crucial because it addresses the pressing need for local
              institutions to take proactive measures in dealing with disasters
              effectively.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="divcontainer">
          <div className="divrow">
            <div className="divwidget">
              <div className="heading-4">
                <b className="know-more">KNOW MORE</b>
              </div>
              <div className="list">
                <div className="item">
                  <div className="div">●</div>
                  <div className="link-what">What We Do</div>
                </div>
                <div className="item1">
                  <div className="div">●</div>
                  <div className="link-what">Our Journey</div>
                </div>
                <div className="item2">
                  <div className="div">●</div>
                  <div className="link-what">Leadership Team</div>
                </div>
                <div className="item3">
                  <div className="div">●</div>
                  <div className="link-what">Relief Manual</div>
                </div>
              </div>
              <div className="list1">
                <div className="item4">
                  <div className="div">●</div>
                  <div className="link-what">Donate Now</div>
                </div>
                <div className="item5">
                  <div className="div">●</div>
                  <div className="link-what">Contact Us</div>
                </div>
              </div>
            </div>
            <div className="divwidget1">
              <div className="heading-3">
                <b className="know-more">Did you Know?</b>
              </div>
              <div className="list2">
                <div className="item-heading-6">
                  <div className="quick-resq-is">{`Quick ResQ is designed to enable effecient and effective communication between releif agencies  `}</div>
                </div>
                <div className="item6">
                  <div className="heading-6">
                    <div className="quick-resq-responds-container">
                      <p className="quick-resq-responds">
                        Quick ResQ responds to major disasters within 24
                      </p>
                      <p className="quick-resq-responds">hours of the event!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divwidget2">
              <div className="heading-31">
                <b className="know-more">Get In Touch</b>
              </div>
              <div className="p">
                <div className="quick-resq-responds-container">
                  For all inquires and info regarding departmentts contact,
                </div>
              </div>
              <div className="divcontact-info">
                <div className="div6">✉</div>
                <div className="infoquickresqorgin"> info@QuickResQ.org.in</div>
              </div>
              <div className="list3">
                <div className="item-link">
                  <div className="iicon-s-facebook">
                    <div className="symbol"></div>
                  </div>
                </div>
                <div className="item-link1">
                  <div className="iicon-s-instagram">
                    <div className="symbol"></div>
                  </div>
                </div>
                <div className="item-link2">
                  <div className="iicon-s-twitter">
                    <div className="symbol"></div>
                  </div>
                </div>
                <div className="item-link3">
                  <div className="iicon-s-linkedin">
                    <div className="symbol"></div>
                  </div>
                </div>
                <div className="item-link4">
                  <div className="iicon-s-youtube">
                    <div className="symbol"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator">
            <div className="link-privacy">{`Privacy Policy | Terms & Conditions`}</div>
            <div className="pcopyright">
              <div className="copyright-2023-quickresq">
                Copyright 2023 -QuickResQ All Rights Reserved.
              </div>
            </div>
          </div>
          <div className="pfooter-menu" />
        </div>
      </div>
      <img className="iphone-15-pro" alt="" src="/iphone-15-pro@2x.png" />
    </div>
  );
};

export default Desktop3;
