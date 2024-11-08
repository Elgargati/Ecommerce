import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  state = {
    selectedCategory: "all",
  };

  handleCategoryChange = (event) => {
    this.setState({ selectedCategory: event.target.value });
  };

  addToCart = (product) => {
    this.props.onAddToCart(product);
    this.setState({
      successMessage: `${product.title} ajouté au panier`,
    });
  };

  render() {
    const { products } = this.props;
    const { selectedCategory } = this.state;

    const filteredProducts =
      selectedCategory === "all"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    const categories = [
      ...new Set(products.map((product) => product.category)),
    ];

    return (
      <div className="container mt-4">
        <div className="d-flex justify-content-between mb-4">
          <select
            className="form-select w-25"
            value={selectedCategory}
            onChange={this.handleCategoryChange}
          >
            <option value="all">Tous les produits</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="row">
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              name={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
              onAddToCart={() => this.addToCart(product)}
            />
          ))}
        </div>
      </div>
    );
  }
}
