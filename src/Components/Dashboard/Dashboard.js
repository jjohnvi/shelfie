import React, { Component } from "react";
import axios from "axios";
import Product from "../Product/Product";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard
        <Product />
      </div>
    );
  }
}

export default Dashboard;
