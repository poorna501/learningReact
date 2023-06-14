import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../navbar/navbar";

// import ComingSoon from "../images/coming-soon.png";

const Users = () => {
  return (
    <div className="" style={{width: "-webkit-fill-available"}}>     
      <NavBar/>   
      <Container>
        <Row className="">
            <Col lg={5} md={6} sm={12}>
              <h1>Users Page</h1>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default Users;
