import React, { useEffect, useState } from "react";

import ApiRick from "../../services/ApiRickMorty";

import { Table, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Rick = () => {
  const [rick, setRick] = useState([]);

  useEffect(() => {
    ApiRick.get("/character").then((result) => {
      console.log(result.data.results);
      setRick(result.data.results);
    });
  }, []);

  return (
    <div>
      <h1 className="title-rick-margin">Characters</h1>
      <Row className="mb-5 mt-5">
        {rick.map((item) => (
          <Col md={3} sm={6} className="card-rick-margin">
            <Link to={"/rick/" + item.id}>
              <Card key={item.id} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Img src={item.image} />
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>

      <h1>Character´s list</h1>

      <Table
        className="title-rick-margin"
        striped
        bordered
        hover
        variant="dark"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
        </thead>
        {rick.map((item) => (
          <tbody>
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.status}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default Rick;
