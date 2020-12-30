import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class CategorList extends Component {
  state = {
    categories: [
      { CategoryId: 1, CategoryName: "Araba" },
      { CategoryId: 2, CategoryName: "Uçak" },
      { CategoryId: 3, CategoryName: "Gemi" },
    ],
    currentCategory: "",
  };
  changeCategory = (category) => {
    this.setState({
      currentCategory: category.CategoryName,
    });
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.changeCategory(category)}
              key={category.CategoryId}
            >
              {category.CategoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h3 className="mt-5">{this.state.currentCategory}</h3>
      </div>
    );
  }
}

export default CategorList;
