import React, { Component } from "react";
import CategorList from "./CategorList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "" };

  changeCategory = (category) => {
    this.setState({
      currentCategory: category.categoryName
    });
  };

  render() {
    let ProductInfo = { title: "Product List" };
    let CategoryInfo = { title: "Category List" };
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>

          <Row>
            <Col xs="3">
              <CategorList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={CategoryInfo}
              />
            </Col>

            <Col xs="9">
              <ProductList currentCategory={this.state.currentCategory} info={ProductInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
