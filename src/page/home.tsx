import { Button, Card, Col, Container, Navbar, Row } from "react-bootstrap";
import Image from "../images/doctor_female.svg";
import Styles from "../styles/home-style.module.css";

const Home = () => {
  return (
    <>
      <Card className={Styles.profileCard}>
        <Card.Header className={Styles.cardHeader}>
          <Card.Img
            className={Styles.profilePicture}
            variant="top"
            src={Image}
          />
          <Card.Text className={Styles.profileDetails}>
            <h6>Dr. Manik Dalvi</h6>
            <span className={Styles.profileDesc}>Obstetrics & Gynecology</span>
            <br />
            <span className={Styles.profiledetalBtn}>
              <Button variant="primary">VIEW PROFILE</Button>
            </span>
          </Card.Text>
        </Card.Header>
      </Card>
    </>
  );
};

export default Home;
