import { Row, Col } from "react-bootstrap";
import Styles from "../styles/home-style.module.css";
import DailySlots from "./slots-tabs/day-slots";

const InClincDetails = () => {
  return (
    <>
      <Row>
        <Col>
          <h5 className="mt-4">Clinic Name</h5>
        </Col>
      </Row>
      <Row>
        <Col className="ms-4 mt-4">
          <input type="radio" checked />
          <span className="ms-2">
            Manik Dalvi's Clinic, Kalyan Naka, Rk Business Centre, Ospanp. Bopal
            Nagar, Maharashtra, 421302
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <DailySlots />
        </Col>
      </Row>
    </>
  );
};

export default InClincDetails;
