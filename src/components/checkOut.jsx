import React, { Component } from "react";

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attuid: "",
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
    const { attuid, imei1, imei2, imei3 } = this.state;
    const checkImeis = [imei1, imei2, imei3];
    let imeis = [];
    for(var i=0; i<checkImeis.length;i++){
      if(checkImeis[i].length === 15){
        imeis.push(checkImeis[i]);
      }else if(checkImeis[i].length > 0){
        alert("One or more IMEIs is incorrect.");
      }

    }
    this.props.preCheckOut(imeis, attuid);
    this.setState({ attuid: "", imei1: "", imei2: "", imei3: "" });
  }
  render() {
    return (
      <div className="container text-center bg-dark text-primary rounded border border-primary">
        <h1 className="font-weight-bold">Check Out</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <div className="input-group text-dark border border-primary rounded mb-2">
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
                <div className="input-group text-dark border border-primary rounded mb-2">
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
                <div className="input-group text-dark border border-primary rounded mb-2">
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
                <div className="input-group text-dark border border-primary rounded mb-2">
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

export default CheckOut;
