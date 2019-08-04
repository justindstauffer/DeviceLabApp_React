import React, { Component } from "react";

export class ManageUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      attuid: ""
    };
  }

  handleChange = e => {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.checkIn(this.state.imei);
    this.setState({
      firstname: "",
      lastname: "",
      attuid: ""
    });
  };

  render() {
    return (
      <div className="container text-center">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <div className="input-group border border-primary rounded mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-dark">
                      First Name:
                    </div>
                  </div>
                  <input
                    className="form-control"
                    name="firstname"
                    type="text"
                    value={this.state.firstname}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-group border border-primary rounded mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-dark">
                      Last Name:
                    </div>
                  </div>
                  <input
                    className="form-control"
                    name="lastname"
                    type="text"
                    value={this.state.lastname}
                    onChange={this.handleChange}
                  />
                </div>
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
    );
  }
}

export default ManageUsers;
