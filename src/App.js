import React, {  useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./App.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
 } from 'reactstrap'


function App() {

  const [details, setDetails] = useState([]);

  const fetchDetails = async () => {

    const { data } = await axios.get('https://randomuser.me/api')

    setDetails(data.results[0]);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

return (
  <Container fluid className="p-4 bg-primary App"> 
  <Row>
    <col md={4}>
      <Card>
        <CardBody className="text-center">

          <img height="150"  width="150"  className="rounded-circle img-thumbnail border-danger"  src={details.picture?.large} />
          <CardTitle className="text-primary">
            <h1>
              <span>{details.named?.title}</span>
              <span>{details.named?.first}</span>
              <span>{details.named?.last}</span>
              
            </h1>
          </CardTitle>
              </CardBody>
      </Card>
    </col>
  </Row>
  </Container> 
  );
}


export default App;