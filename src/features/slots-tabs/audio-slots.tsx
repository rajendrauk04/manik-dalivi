import { Col, Nav, Row, Tab } from "react-bootstrap";

const AudioSlots = () => {
  return (
    <>
      <Tab.Container defaultActiveKey="today">
        <Row
          style={{
            justifyContent: "center",
            marginLeft: "10px",
            alignItems: "center",
            marginTop: "30px",
            borderBottom: "1px solid gray"
          }}
        >
          <Col>
            <Nav variant="underline">
              <Col md={1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="black"
                  className="bi bi-chevron-left mt-4 ms-5"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </Col>
              <Col md={3}>
                <Nav.Item>
                  <Nav.Link eventKey="today" className="text-center text-black ms-5">
                    <b>
                      {" "}
                      Today <br />
                    </b>{" "}
                    12 slots available
                  </Nav.Link>
                </Nav.Item>
              </Col>
              <Col md={3}>
                <Nav.Item>
                  <Nav.Link eventKey="tomorrow" className="text-center text-black ms-5">
                    <b>
                      {" "}
                      Tomorrow <br />
                    </b>{" "}
                    12 slots available
                  </Nav.Link>
                </Nav.Item>
              </Col>
              <Col md={3}>
                <Nav.Item>
                  <Nav.Link eventKey="up-coming" className="text-center text-black ms-5">
                    <b>
                      {" "}
                      Mon, 01 Dec <br />
                    </b>{" "}
                    12 slots available
                  </Nav.Link>
                </Nav.Item>
              </Col>
              <Col md={1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="black"
                  className="bi bi-chevron-right mt-4 ms-5"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </Col>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="today">Today's Slot</Tab.Pane>
              <Tab.Pane eventKey="tomorrow">Tomorrow's Slot</Tab.Pane>
              <Tab.Pane eventKey="up-coming">Mon, 01 Dec's Slot</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};
export default AudioSlots;
