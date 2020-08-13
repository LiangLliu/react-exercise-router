import React, { Component } from 'react';

import products from '../../exercise-2/mockups/data.json'

class Product extends Component {

  constructor(props) {
    super(props);
    const id = this.props.match.params.id;

    this.state = {
      product:
        Object.values(products).find(product => product.id === Number.parseInt(id))
    }
  }

  render() {
   const data = this.state.product;
    return (
      <div className="product">
        <p><strong>Product Details: </strong></p>
        <p>Name: {data.name}</p>
        <p>Id: {data.id}</p>
        <p>Price: {data.price}</p>
        <p>Quantity: {data.quantity}</p>
        <p>Desc: {data.desc}</p>
        <p>URL: /products/{data.id}</p>
      </div>
    )
  }
}

export default Product;
