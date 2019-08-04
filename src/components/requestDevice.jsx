import React, { Component } from "react";

export class RequestDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      make: "",
      model: "",
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
    this.setState({ imei: "" });
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
                <div className="input-group border border-primary rounded mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-dark">
                      Make:
                    </div>
                  </div>
                  <input
                    className="form-control"
                    name="make"
                    type="text"
                    value={this.state.make}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-group border border-primary rounded mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-dark">
                      Model:
                    </div>
                  </div>
                  <input
                    className="form-control"
                    name="model"
                    type="text"
                    value={this.state.model}
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

export default RequestDevice;
