import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark border-top border-bottom border-primary">
          <ul className="navbar-nav mx-auto mt-2 mt-lg-0 border-primary">
            <li className="nav-item border border-primary m-1 rounded">
              <Link to="/">
                <button className="btn btn-primary m-1 text-dark font-weight-bold">
                  Check In / Check Out
                </button>
              </Link>
              {/* <a class="nav-link text-dark font-weight-bold" href="#">Admin </a> */}
            </li>
            <li className="nav-item border border-primary m-1 rounded">
            <Link to="/requestdevice">
                <button className="btn btn-primary m-1 text-dark font-weight-bold">
                  Request Device
                </button>
              </Link>
              {/* <a class="nav-link text-dark font-weight-bold" href="#">Admin </a> */}
            </li>
            <li className="nav-item border border-primary m-1 rounded">
            <Link to="/reportissue">
                <button className="btn btn-primary m-1 text-dark font-weight-bold">
                  Report Issue
                </button>
              </Link>
              {/* <a class="nav-link text-dark font-weight-bold" href="#">Report An Error</a> */}
            </li>
            <li className="nav-item border border-primary m-1 rounded">
              <Link to="/inventory">
                <button className="btn btn-primary m-1 text-dark font-weight-bold">
                  Inventory
                </button>
              </Link>
              {/* <a class="nav-link text-dark font-weight-bold" href="#">Report An Error</a> */}
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
