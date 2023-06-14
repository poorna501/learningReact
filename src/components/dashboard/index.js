import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../navbar/navbar";

// import ComingSoon from "../images/coming-soon.png";

const Dashboard = () => {
  return (
    <div className="" style={{width: "-webkit-fill-available"}}>     
      <NavBar/>       
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
            <Col lg={5} md={6} sm={12}>
              <h1>Dashboard page</h1>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default Dashboard;
