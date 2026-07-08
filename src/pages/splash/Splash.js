import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5500);
  }

  componentWillMount() {
    clearTimeout(this.id);
  }

  render() {
    return <Redirect to="/home" />;
  }
}

export default Splash;
