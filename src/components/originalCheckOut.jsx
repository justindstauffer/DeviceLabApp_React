import React, { Component } from "react";

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imei: ""
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
    this.props.checkOut(this.state.imei);
    this.setState({imei: ''});
  }
  render() {
    return (
      <div className="container text-center bg-dark text-primary rounded border border-primary">
        <h1 className="font-weight-bold">Check Out</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <div className="input-group text-dark border border-primary rounded">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-dark">IMEI:</div>
                  </div>
                  <input
                    className="form-control"
                    name="imei"
                    type="text"
                    value={this.state.imei}
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

export default CheckOut;
