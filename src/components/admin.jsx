import React, { Component } from "react";

export class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attuid: "",
      password: ""
    };
  }

  handleChange = e => {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { attuid, password } = this.state;
    if(attuid === "admin" && password === "password"){
      window.location.href = "http://localhost:3000/admin/adddevice";
    }else {
      alert('Must be an admin to access admin console.')
      window.location.href = "http://localhost:3000/";
    }

    this.setState({
      attuid: "",
      password: ""
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container bg-secondary rounded mt-3 mb-3 border border-primary">
          <div className="container bg-dark mb-3 mt-3 text-center text-primary border border-primary rounded">
            <React.Fragment>
              <h1 className="font-weight-bold">Admin Login</h1>
              <div className="container text-center d-flex justify-content-center">
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <div className="input-group border border-primary rounded mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-dark">
                              ATTUID:
                            </div>
                          </div>
                          <input
                            className="form-control"
                            name="attuid"
                            type="text"
                            value={this.state.attuid}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="input-group border border-primary rounded">
                          <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-dark">
                              Password:
                            </div>
                          </div>
                          <input
                            className="form-control"
                            name="password"
                            type="text"
                            value={this.state.password}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          className="btn btn-primary btn-block text-dark"
                          type="submit"
                          value="Submit"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </React.Fragment>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Admin;
