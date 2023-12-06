import { Navbar, Container } from "react-bootstrap";
import Styles from "../styles/home-style.module.css";

const FooterSection = () => {
  return (
    <Navbar className={Styles.footerDetails}>
      <Container>
        <Navbar.Brand href="/">MD</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Help ?
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FooterSection;
