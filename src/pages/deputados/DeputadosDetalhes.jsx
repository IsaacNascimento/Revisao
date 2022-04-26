import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ApiDeputados from "../../services/ApiDeputados";

const DeputadosDetalhes = () => {

    const params = useParams();
    const [deputados, setdeputados] = useState([]);
    const [partidos, setPartidos] = useState([]);
    
    useEffect(() => {
    ApiDeputados.get("/deputados/"+ params.id).then((result) => {
          console.log(result.data.dados);
          setdeputados(result.data.dados);
          }
        );
    ApiDeputados.get("/partidos/"+ params.id).then((result) => {
          console.log(result.data.dados);
          setPartidos(result.data.dados);
          }
        );
      }, []);
    
    return (
       <div>
           <h1 className="mt-3">{deputados.nomeCivil}</h1>

           <Row>
               <Col md={4}>
                  <Card>
                      <Card.Img variant="top" src={deputados.ultimoStatus?.urlFoto}/>

                  </Card>
               </Col>
               <Col className="mt-3" md={8}>
                  <p>
                      <strong>
                          Partido:
                      </strong> {deputados.ultimoStatus?.siglaPartido}
                  </p>
                  <p>
                      <strong>
                          Estado: 
                      </strong> {deputados.ultimoStatus?.siglaUf}
                  </p>
                  <p>
                      <strong>
                          Data de nascimento: 
                      </strong> {deputados.dataNascimento}
                  </p>
                  <p>
                      <strong>
                          Escolaridade
                      </strong> {deputados.escolaridade}
                  </p>
                  <Link className="btn btn-dark" to={-1}>Voltar</Link>
               </Col>
           {/* <h1>{deputados.ultimoStatus?.siglaPartido}</h1> */}
           </Row>
           <h1 className="mt-3">Partido:</h1>
           <Row>
               <Col md={2} className="mb-2">
                 <Card>
                     {/* <Card.Img variant="top" src={partidos.status.lider?.urlFoto}/>   */}
                 </Card>
               </Col>
           </Row>
       </div>
    );
}

export default DeputadosDetalhes;