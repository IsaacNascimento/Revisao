import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import ApiDeputados from "../../services/ApiDeputados";

const Deputados = () => {
  const [deputados, setdeputados] = useState([]);

  useEffect(() => {
    ApiDeputados.get("/deputados").then((result) => {
      console.log(result.data.dados);
      setdeputados(result.data.dados);
    });
  }, []);

  return (
    <div>
      <h1>Deputados</h1>
      <Row>
        {deputados.map((item) => (
          <Col key={item.id} md={3} className="mb-3">
            <Card className="h-80" style={{ heigh: "18rem", width: "18rem" }}>
              <Card.Img variant="top" src={item.urlFoto} />
              <Card.Body>
                <Card.Title>{item.nome}</Card.Title>
                <Link className="btn btn-dark" to={'/' + item.id}>Ver detalhes</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Deputados;
