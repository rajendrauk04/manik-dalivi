import { Button, Row, Card, ListGroup, Table, Col } from "react-bootstrap";
import Styles from "../table-styles/table-style.module.css";
import { useState } from "react";

interface FakeDataItem {
  id: number;
  time: string;
}

const fakeData: FakeDataItem[] = [
  {
    id: 1,
    time: "10:20 AM",
  },
  {
    id: 2,
    time: "10:30 AM",
  },
  {
    id: 3,
    time: "10:40 AM",
  },
  {
    id: 4,
    time: "10:50 AM",
  },
  {
    id: 5,
    time: "11:00 AM",
  },
  {
    id: 6,
    time: "11:10 AM",
  },
];

const LastTable = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [isAnyButtonClicked, setIsAnyButtonClicked] = useState(false);

  const handleClick = (itemId: number) => {
    if (itemId === selectedButton) {
      setSelectedButton(null);
      setIsAnyButtonClicked(false);
    } else {
      setSelectedButton(itemId);
      setIsAnyButtonClicked(true);
    }
  };

  return (
    <>
      <Row style={{ justifyContent: "space-around", gap: "10px", marginTop: "20px" }}>
        {fakeData.map((item: any) => (
          <Col>
            <div key={item.id}>
              <Button
                variant="primary"
                className={`${Styles.timeData} ${
                  item.id === selectedButton ? Styles.active : ""
                }`}
                onClick={() => handleClick(item.id)}
              >
                {item.time}
              </Button>
            </div>
          </Col>
        ))}
      </Row>
      <Row style={{ float: "right", marginTop: "30px", marginBottom: '60px', fontSize: "13px" }}>
        <Col>
          <Button
            className={isAnyButtonClicked ? "" : Styles.disabledButton}
            style={{ fontSize: "13px" }}
            disabled={!isAnyButtonClicked}
          >
            CONTINUE
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default LastTable;
