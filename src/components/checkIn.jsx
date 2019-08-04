import React, { Component } from "react";

class CheckIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imei1: "",
      imei2: "",
      imei3: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { imei1, imei2, imei3 } = this.state;
    const imeis = [imei1, imei2, imei3];
    this.props.preCheckIn(imeis);
    this.setState({ imei1: "", imei2: "", imei3: "" });
  }

  render() {
    return (
      <div className="container text-center bg-dark text-primary rounded border border-primary">
        <h1 className="font-weight-bold">Check In</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <div className="input-group border border-primary rounded mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-dark">
                      IMEI 1:
                    </div>
                  </div>
                  <input
                    className="form-control"
                    name="imei1"
                    type="text"
                    value={this.state.imei1}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-group border border-primary rounded mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-dark">
                      IMEI 2:
                    </div>
                  </div>
                  <input
                    className="form-control"
                    name="imei2"
                    type="text"
                    value={this.state.imei2}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-group border border-primary rounded mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-dark">
                      IMEI 3:
                    </div>
                  </div>
                  <input
                    className="form-control"
                    name="imei3"
                    type="text"
                    value={this.state.imei3}
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

export default CheckIn;
