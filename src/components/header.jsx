import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark text-primary d-flex justify-content-between">
        <Link to="/admin"><button className="btn btn-dark text-dark">Admin</button></Link>
        <Link to="/"><h1 className=" display-4 font-weight-bold">Device Lab</h1></Link> 
        <Link to="/admin"><button className="btn btn-dark text-dark">Admin</button></Link>
      </div>
    );
  }
}

export default Header;
