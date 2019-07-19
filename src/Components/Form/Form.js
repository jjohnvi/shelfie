import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
      image: "",
      price: "",
      inventory: []
    };
    this.handleImage = this.handleImage.bind(this);
  }
  handleChange = e => {
    console.log(e);
    this.setState({
      product: e.target.value
    });
    console.log(this.state);
  };

  handleImage(e) {
    this.setState({ image: e.target.value });
  }

  handlePrice = e => {
    this.setState({ price: e.target.value });
  };

  handleCancel = e => {
    this.setState({ product: "", image: "", price: "" });
    console.log(e);
  };

  handleClick = e => {
    axios.post("/api/inventory").then(response => {
      const addTo = [
        this.state.product,
        this.state.image,
        this.state.price,
        ...this.state.inventory
      ];
      this.setState({ inventory: addTo });
    });
  };

  render() {
    const { product, image, price, inventory } = this.state;
    return (
      <div>
        <p>Form</p>
        Image URL:
        <input
          className="image__url"
          type="text"
          onChange={this.handleImage}
          value={image}
        />
        Product Name:
        <input
          className="product__name"
          type="text"
          onChange={this.handleChange}
          value={product}
        />
        Price:
        <input
          className="price"
          type="text"
          onChange={this.handlePrice}
          value={price}
        />
        <button onClick={this.handleCancel}>Cancel</button>
        <button onClick={this.handleClick}>Add to Inventory</button>
        <p>{inventory}</p>
      </div>
    );
  }
}

export default Form;
