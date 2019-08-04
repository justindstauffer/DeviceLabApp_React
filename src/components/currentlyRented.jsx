import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';

class CurrentlyRented extends Component {
  render() {
    const columns = [{
      dataField: 'make',
      text: 'Make',
      headerStyle: {backgroundColor: '#007bff'}
    }, {
      dataField: 'model',
      text: 'Model',
      headerStyle: {backgroundColor: '#007bff'}
    }, {
      dataField: 'rentedby',
      text: 'Rented by',
      headerStyle: {backgroundColor: '#007bff'}
    }, {
      dataField: 'rentedwhen',
      text: 'Rented since',
      headerStyle: {backgroundColor: '#007bff'}
    }];

    return (
      <div className="container text-center">
        <BootstrapTable rowStyle={{backgroundColor: '#007bff'}} columnStyle={{backgroundColor: '#007bff'}} keyField="imei" data={ this.props.data } columns={ columns } />
      </div>
    );
  }
}

export default CurrentlyRented;
