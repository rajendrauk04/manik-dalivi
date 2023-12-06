import { Navbar, Container } from "react-bootstrap";

const MainHeader = () => {
  return (
    <Navbar className="bg-white" fixed="top">
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

export default MainHeader;
