// src/components/Product.jsx
import React, { Component } from "react";
import "./ProductStyle.css";

export default class Product extends Component {
  state = {
    showSuccessMessage: false,
  };

  handleAddToCart = () => {
    const { onAddToCart } = this.props;
    onAddToCart();
    this.setState({ showSuccessMessage: true });
    setTimeout(() => {
      this.setState({ showSuccessMessage: false });
    }, 3000);
  };

  closeSuccessMessage = () => {
    this.setState({ showSuccessMessage: false });
  };

  render() {
    const { name, price, image, description } = this.props;
    const { showSuccessMessage } = this.state;

    return (
      <div className="col-md-6 col-lg-4 col-xl-3 mb-5 d-flex flex-column align-content-center">
        <div className="card shadow h-100">
          {showSuccessMessage && (
            <div className="alert alert-success mt-3 mx-2 d-flex justify-content-between align-items-center ">
              Ajouté au panier
              <button
                className="btn-close"
                onClick={this.closeSuccessMessage}
              ></button>
            </div>
          )}
          <div className="d-flex justify-content-center m-2 h-75">
            <img src={image} className="card-img-top m-auto w-50" alt={name} />
          </div>

          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description.slice(0, 100)}...</p>
          </div>
          <div className="d-flex justify-content-between m-3 align-items-center">
            <p className="card-text">
              <span className="text-danger text-decoration-line-through">
                {price.toFixed(2)} DH
              </span>
              <br />
              <span className="fw-semibold text-success">
                {(price - price * 0.2).toFixed(2)} DH
              </span>
            </p>
            <button
              className="btn btn-outline-warning"
              onClick={this.handleAddToCart}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    );
  }
}
