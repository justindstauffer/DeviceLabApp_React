import React, { Component } from "react";

export class AddDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imei: "",
      make: "",
      model: "",
      sim: "",
      ctn: "",
      status: ""
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
      imei: "",
      make: "",
      model: "",
      sim: "",
      ctn: "",
      status: ""
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
                      IMEI:
                    </div>
                  </div>
                  <input
                    className="form-control"
                    name="imei"
                    type="text"
                    value={this.state.imei}
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
                <div className="input-group border border-primary rounded mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-dark">
                      Sim:
                    </div>
                  </div>
                  <input
                    className="form-control"
                    name="sim"
                    type="text"
                    value={this.state.sim}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-group border border-primary rounded mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-dark">
                      CTN:
                    </div>
                  </div>
                  <input
                    className="form-control"
                    name="ctn"
                    type="text"
                    value={this.state.ctn}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-group border border-primary rounded mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-dark">
                      Status:
                    </div>
                  </div>
                  <input
                    className="form-control"
                    name="status"
                    type="text"
                    value={this.state.status}
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

export default AddDevice;
