// src/components/Cart.jsx
import React, { Component } from "react";

class Cart extends Component {
  render() {
    const { cartItems } = this.props;

    const total = cartItems.reduce(
      (acc, item) =>
        acc + (item.price.toFixed(2) - item.price * 0.2) * item.quantity,
      0
    );

    return (
      <div className="container mt-4">
        <h2>Votre Panier</h2>
        {cartItems.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Nom du Produit</th>
                  <th>Quantite</th>
                  <th>Prix Unitaire</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>{(item.price - item.price * 0.2).toFixed(2)} DH</td>
                    <td>
                      {(
                        (item.price - item.price * 0.2) *
                        item.quantity
                      ).toFixed(2)}{" "}
                      DH
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="d-flex justify-content-between mt-4">
              <h4>Total : {total.toFixed(2)} DH</h4>
              <button className="btn btn-success">
                Proceder à la commande
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
