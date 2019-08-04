import React, { Component } from "react";

class SubmitInOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imei: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitInOut(this.props.imeisIn, this.props.imeisOut);
    this.setState({ imei: "" });
  }

  render() {
    return (
      <div className="container text-center bg-dark text-primary rounded border border-primary pt-3 m-3">
        <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  className="btn btn-primary btn-block text-dark"
                  type="submit"
                  value="Submit"
                />
              </div>
        </form>
      </div>
    );
  }
}

export default SubmitInOut;
