import React from "react";
import CategorList from "./CategorList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

function App() {
  let ProductInfo = {title:"Product List"}
  let CategoryInfo = {title:"Category List"}
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>

        <Row>
          <Col xs="3">
            <CategorList info={CategoryInfo}/>
          </Col>

          <Col xs="9">
            <ProductList info={ProductInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
