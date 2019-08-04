import React, { Component } from "react";

class RentedDevice extends Component {
  getStyle = () => {
    return {
      display: "flex",
      justifyContent: "space-between",
      background: "#f4f4f4",
      padding: "10px",
      border: "2px #000 solid"
    };
  };
  render() {
    const { imei, make, model, inout } = this.props.rentedDevices;
    return (
      <div style={this.getStyle()}>
        <h3>{imei}</h3>
        <h3>{make}</h3>
        <h3>{model}</h3>
        <h3>{inout}</h3>
      </div>
    );
  }
}

export default RentedDevice;
