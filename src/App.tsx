import { Container } from "react-bootstrap";
import "./App.css";
import MainHeader from "./component/main-header";
import Home from "./page/home";
import ClinicSection from "./component/clinic-section";
import FooterSection from "./component/footer-section";

function App() {
  return (
    <>
      <MainHeader />
      <Container>
        <Home />
        <ClinicSection />
      </Container>
    </>
  );
}

export default App;
