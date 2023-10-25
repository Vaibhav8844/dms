import { useCallback } from "react";
import "./AndroidLarge2.css";

const AndroidLarge2 = () => {
  const onIconMapClick = useCallback(() => {
    // Please sync "Android Large - 1" to the project
  }, []);

  return (
    <div className="android-large-2">
      <div className="android-large-2-child" />
      <div className="rectangle-parent12">
        <div className="group-child52" />
        <div className="group-child53" />
        <img className="group-child54" alt="" src="/rectangle-7.svg" />
        <img className="group-child55" alt="" src="/rectangle-9.svg" />
        <img className="group-child56" alt="" src="/rectangle-6.svg" />
        <div className="fire-brigade-emergency-container">
          <p className="fire-brigade">Fire Brigade</p>
          <p className="fire-brigade">Emergency</p>
          <p className="fire-brigade">Services</p>
        </div>
        <img className="icon-home-1" alt="" src="/-icon-home-1.svg" />
        <img
          className="icon-map"
          alt=""
          src="/-icon-map.svg"
          onClick={onIconMapClick}
        />
        <img
          className="icon-document-upload"
          alt=""
          src="/-icon-document-upload.svg"
        />
        <img
          className="icon-search-normal-1"
          alt=""
          src="/-icon-search-normal-1.svg"
        />
        <img
          className="icon-call-calling"
          alt=""
          src="/-icon-call-calling.svg"
        />
      </div>
      <div className="android-large-2-item" />
      <div className="ambulance-emergency-services-container">
        <p className="fire-brigade">{`Ambulance `}</p>
        <p className="fire-brigade">{`Emergency `}</p>
        <p className="fire-brigade">Services</p>
      </div>
      <div className="android-large-2-inner" />
      <b className="quick-resq1">Quick ResQ</b>
      <img className="image-9-icon" alt="" src="/image-9@2x.png" />
      <img className="image-11-icon" alt="" src="/image-11@2x.png" />
      <img className="image-10-icon" alt="" src="/image-10@2x.png" />
      <div className="police-emergency-services-container">
        <p className="fire-brigade">{`Police `}</p>
        <p className="fire-brigade">Emergency</p>
        <p className="fire-brigade">Services</p>
      </div>
      <div className="android-large-2-child1" />
      <div className="android-large-2-child2" />
      <div className="android-large-2-child3" />
      <div className="share-live-location">SHARE LIVE LOCATION</div>
      <img className="icon-warning-2" alt="" src="/-icon-warning-2.svg" />
      <img className="icon-warning-21" alt="" src="/-icon-warning-21.svg" />
      <img
        className="icon-profile-circle"
        alt=""
        src="/-icon-profile-circle.svg"
      />
    </div>
  );
};

export default AndroidLarge2;
