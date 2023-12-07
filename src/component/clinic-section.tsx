import Styles from "../styles/home-style.module.css";
import ImageHome from "../images/In-Clinic_b.png";
import ImageCall from "../images/Audio_b.png";
import ImageVideo from "../images/video_b.png";
import { Card, Col, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InClincDetails from "../features/in-clicknic";
import { useState } from "react";
import AudioDetails from "../features/audio-details";
import CallDetails from "../features/call-details";
import FooterSection from "./footer-section";

const ClinicSection = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
  return (
    <>
      <Card className={Styles.clinicCard}>
        <Card.Body>
          <Row className={Styles.bookAppointment}>
            <Col md={6}>
              <Card.Title>Book Appointment</Card.Title>
              <span className={Styles.consulType}>
                Select Your Consultation Type
              </span>
              <br />
              <span className={Styles.feeDatails}>Fees approx ₹ 500</span>
              <br />
              <span className={Styles.payClinic}>(pay at clinic)</span>
            </Col>
            <Col md={6}>
              <div className={Styles.menuIconsContainer}>
                <img
                  className={
                    Styles.menuIcon +
                    (activeTab === "home" ? ` ${Styles.menuIcon}` : "")
                  }
                  src={ImageHome}
                  alt="home-icon"
                  onClick={() => handleTabClick("home")}
                />
                <img
                  className={
                    Styles.menuIcon +
                    (activeTab === "call" ? ` ${Styles.menuIcon}` : "")
                  }
                  src={ImageCall}
                  alt="call-icon"
                  onClick={() => handleTabClick("call")}
                />
                <img
                  className={
                    Styles.menuIcon +
                    (activeTab === "video" ? ` ${Styles.menuIcon}` : "")
                  }
                  src={ImageVideo}
                  alt="video-icon"
                  onClick={() => handleTabClick("video")}
                />
              </div>
            </Col>
          </Row>
          <Row>
            {activeTab === "home" && <InClincDetails />}
            {activeTab === "call" && <AudioDetails />}
            {activeTab === "video" && <CallDetails />}
          </Row>
        </Card.Body>
        <Card.Footer className={Styles.cardAccordian}>
          <FooterSection />
        </Card.Footer>
      </Card>
    </>
  );
};

export default ClinicSection;
