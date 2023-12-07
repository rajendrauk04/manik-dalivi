import React, { useState } from "react";
import { Accordion, Table } from "react-bootstrap";

const DoutsSection = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0" className="mb-3">
          <Accordion.Header>Question 1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="01" className="mb-3">
          <Accordion.Header>Question 2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="02" className="mb-3">
          <Accordion.Header>Question 3</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="03" className="mb-3">
          <Accordion.Header>Question 4</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="04" className="mb-3">
          <Accordion.Header>Question 5</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="05" className="mb-3">
          <Accordion.Header>Question 6</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="06" className="mb-3">
          <Accordion.Header>Question 7</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default DoutsSection;

// import React, { useState } from "react";
// import { Card, ListGroup } from "react-bootstrap";

// const DoutsSection = () => {
//   const [showDetails, setShowDetails] = useState(Array(5).fill(false));

//   const toggleDetails = (index: number) => {
//     const updatedDetails = [...showDetails];
//     updatedDetails[index] = !updatedDetails[index];
//     setShowDetails(updatedDetails);
//   };

//   return (
//     <>
//       <Card className="mb-4">
//         <ListGroup variant="flush">
//           <ListGroup.Item onClick={() => toggleDetails(0)}>
//             What are the payment options available?
//           </ListGroup.Item>
//           {showDetails[0] && (
//             <ListGroup.Item>
//               <p>
//                 E.g, You can pay using a variety of methods such as Internet
//                 Banking, Debit/Credit card, Wallet, UPI, and so on.
//               </p>
//             </ListGroup.Item>
//           )}
//         </ListGroup>
//       </Card>
//       <Card className="mb-4">
//         <ListGroup variant="flush">
//           <ListGroup.Item onClick={() => toggleDetails(1)}>
//             What are the payment options available?
//           </ListGroup.Item>
//           {showDetails[1] && (
//             <ListGroup.Item>
//               <p>
//                 E.g, You can pay using a variety of methods such as Internet
//                 Banking, Debit/Credit card, Wallet, UPI, and so on.
//               </p>
//             </ListGroup.Item>
//           )}
//         </ListGroup>
//       </Card>
//       <Card className="mb-4">
//         <ListGroup variant="flush">
//           <ListGroup.Item onClick={() => toggleDetails(2)}>
//             What are the payment options available?
//           </ListGroup.Item>
//           {showDetails[2] && (
//             <ListGroup.Item>
//               <p>
//                 E.g, You can pay using a variety of methods such as Internet
//                 Banking, Debit/Credit card, Wallet, UPI, and so on.
//               </p>
//             </ListGroup.Item>
//           )}
//         </ListGroup>
//       </Card>
//       <Card className="mb-4">
//         <ListGroup variant="flush">
//           <ListGroup.Item onClick={() => toggleDetails(3)}>
//             What are the payment options available?
//           </ListGroup.Item>
//           {showDetails[3] && (
//             <ListGroup.Item>
//               <p>
//                 E.g, You can pay using a variety of methods such as Internet
//                 Banking, Debit/Credit card, Wallet, UPI, and so on.
//               </p>
//             </ListGroup.Item>
//           )}
//         </ListGroup>
//       </Card>
//       <Card className="mb-4">
//         <ListGroup variant="flush">
//           <ListGroup.Item onClick={() => toggleDetails(4)}>
//             Do we serve all over India?
//           </ListGroup.Item>
//           {showDetails[4] && (
//             <ListGroup.Item>
//               <p>
//                 E.g, You can pay using a variety of methods such as Internet
//                 Banking, Debit/Credit card, Wallet, UPI, and so on.
//               </p>
//             </ListGroup.Item>
//           )}
//         </ListGroup>
//       </Card>
//     </>
//   );
// };

// export default DoutsSection;
