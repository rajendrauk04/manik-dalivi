import { Row, Col, Card, Accordion } from "react-bootstrap";
import Styles from "../styles/home-style.module.css";
import DoutsSection from "./footer-doubts-section";

const FooterSection = () => {
  return (
    <Card className={Styles.footerDetails}>
      <Row className={Styles.footerContent}>
        <Col>
          <h2>Frequently asked questions</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <DoutsSection />
        </Col>
      </Row>
    </Card>
  );
};

export default FooterSection;
