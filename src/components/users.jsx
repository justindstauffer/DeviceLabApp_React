import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';

class Users extends Component {
  render() {
    const columns = [{
      dataField: 'attuid',
      text: 'ATTUID',
      headerStyle: {backgroundColor: '#007bff'}
    }, {
      dataField: 'firstname',
      text: 'First Name',
      headerStyle: {backgroundColor: '#007bff'}
    }, {
      dataField: 'lastname',
      text: 'Last Name',
      headerStyle: {backgroundColor: '#007bff'}
    }];

    return (
      <div className="container text-center">
        <BootstrapTable rowStyle={{backgroundColor: '#007bff'}} columnStyle={{backgroundColor: '#007bff'}} keyField="imei" data={ this.props.data } columns={ columns } />
      </div>
    );
  }
}

export default Users;
