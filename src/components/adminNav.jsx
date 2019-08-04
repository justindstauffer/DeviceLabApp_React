import React, { Component } from "react";
import { Link } from "react-router-dom";

export class AdminNav extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="border-top border-primary font-weight-bold text-primary">
          Admin Console
        </h1>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark border-top border-bottom border-primary">
          <ul className="navbar-nav mx-auto mt-2 mt-lg-0 border-primary">
            <li className="nav-item border border-primary m-1 rounded">
              <Link to="/admin/adddevice">
                <button className="btn btn-primary m-1 text-dark font-weight-bold">
                  Add Device
                </button>
              </Link>
              {/* <a class="nav-link text-dark font-weight-bold" href="#">Admin </a> */}
            </li>
            <li className="nav-item border border-primary m-1 rounded">
              <Link to="/admin/manageusers">
                <button className="btn btn-primary m-1 text-dark font-weight-bold">
                  Manage Users
                </button>
              </Link>
              {/* <a class="nav-link text-dark font-weight-bold" href="#">Report An Error</a> */}
            </li>
            <li className="nav-item border border-primary m-1 rounded">
            <Link to="/admin/editinventory">
                <button className="btn btn-primary m-1 text-dark font-weight-bold">
                  Edit Inventory
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

export default AdminNav;
