// src/App.jsx
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default class App extends Component {
  state = {
    products: [],
    cart: [],
    successMessage: "",
  };

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data });
      })
      .catch((error) =>
        console.error("Erreur lors de la recuperation des produits :", error)
      );
  }

  addToCart = (product) => {
    const { cart } = this.state;
    console.log(cart);
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      this.setState({
        cart: cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      this.setState({
        cart: [...cart, { ...product, quantity: 1 }],
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/Ecommerce"
            element={
              <ProductList
                products={this.state.products}
                onAddToCart={this.addToCart}
              />
            }
          />
          <Route path="/cart" element={<Cart cartItems={this.state.cart} />} />
        </Routes>
      </div>
    );
  }
}
