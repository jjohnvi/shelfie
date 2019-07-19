import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import { HashRouter } from "react-router-dom";
import axios from "axios";
import { Link, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/inventory")
      .then(res => this.setState({ inventory: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    const { inventory } = this.state;
    return (
      <HashRouter>
        <div className="App">
          <Dashboard />

          <Header />
          <Link to="/api/inventory">
            <Form />
          </Link>
        </div>
      </HashRouter>
    );
  }
}

export default App;
