import React, { Component } from 'react'
import RentedDevice from './rentedDevice';

export default class OutDevices extends Component {


  render() {
    return this.props.rentedDevices.map((rentedDevices) => (
        <RentedDevice key={rentedDevices.imei} rentedDevices={rentedDevices} />
    ));
  }
}