import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import CheckIn from './components/checkIn';
import CheckOut from './components/checkOut';
import CurrentlyRented from './components/currentlyRented';
import Header from './components/header';
import Navbar from './components/navbar';
import Admin from './components/admin';
import Inventory from './components/inventory';
import RequestDevice from './components/requestDevice';
import ReportIssue from './components/reportIssue';
import AdminNav from './components/adminNav';
import AddDevice from './components/addDevice';
import ManageUsers from './components/manageUsers';
import EditInventory from './components/editInventory';
import Users from './components/users';

import axios from 'axios';


class App extends Component {
  state = {
    rentedDevices: [],
    allDevices: [],
    issues: [],
    users: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/outdevices')
      .then(res => this.setState({ rentedDevices: res.data }))

    axios.get('http://localhost:5000/api/allDevices')
      .then(res => this.setState({ allDevices: res.data }))
    
    axios.get('http://localhost:5000/api/checkUsers')
      .then(res => this.setState({ users: res.data }))

    axios.get('http://localhost:5000/api/issues')
      .then(res => this.setState({ issues: res.data }))

  }

  preCheckIn = async (imeis) => {
    for (var i = 0; i < imeis.length; i++) {
      if (imeis[i].length === 15) {
        await this.checkIn(imeis[i]);
        await this.postCheckIn(imeis[i]);
      }
      else if (imeis[i].length === 0) {

      }
      else {
        alert('IMEI Wrong!');
      }
    }

  }

  checkIn = async (imei) => {

    await axios
      .post("http://localhost:5000/api/indevices", {
        imei: imei
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  postCheckIn = async (imei) => {
    const checkImei = Number(imei);
    await this.setState({
      rentedDevices: this.state.rentedDevices.filter(device => device.imei !== checkImei)
    });
    await axios.get('http://localhost:5000/api/alldevices')
      .then(res => this.setState({ allDevices: res.data }))
  }

  preCheckOut = async (imeis, attuid) => {
    let today = new Date();
    today = Date.now();
    // let date = (today.getMonth()+1)+'-'+today.getDate()+'-'+ today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    for (var i = 0; i < imeis.length; i++) {
      if (imeis[i].length === 15) {
        await this.checkOut(imeis[i], attuid, today);
        await this.postCheckOut(imeis[i]);
      }
      else if (imeis[i].length === 0) {
        console.log('hello');
      }
      else {
        alert('IMEI Wrong!');
      }
    }

  }

  checkOut = async (imei, attuid, date) => {
    await axios
      .post("http://localhost:5000/api/outdevices", {
        imei: imei,
        attuid: attuid,
        date: date
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


  }
  postCheckOut = async (imei) => {
    await axios.get('http://localhost:5000/api/outdevices')
      .then(res => this.setState({ rentedDevices: res.data }))
    await axios.get('http://localhost:5000/api/alldevices')
      .then(res => this.setState({ allDevices: res.data }))
  }

  calculateTimeRented = async () => {
    
  }


  render() {
    return (
      <Router>
        <div className="App bg-dark">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Navbar />
              <div className="container bg-secondary rounded mb-3 mt-3 border border-primary">
                <div className="row p-3">
                  <div className="col"><CheckIn preCheckIn={this.preCheckIn} /></div>
                  <div className="col"><CheckOut preCheckOut={this.preCheckOut} /></div>
                </div>
              </div>
              <div className="container bg-secondary rounded mb-3 border border-primary">
                <div className="container bg-dark mb-3 mt-3 text-center text-primary border border-primary rounded">
                  <h1 className="font-weight-bold">Currently Rented Devices</h1>
                  {/* <div className="col"><OutDevices rentedDevices={this.state.rentedDevices} /></div> */}
                  <div className="col p-3"><CurrentlyRented data={this.state.rentedDevices} /></div>
                </div>
              </div>
            </React.Fragment>
          )} />
          <Route path="/inventory" render={props => (
            <React.Fragment>
              <Navbar />
              <div className="container bg-secondary rounded mt-3 mb-3 border border-primary">
                <div className="container bg-dark mb-3 mt-3 text-center text-primary border border-primary rounded">
                  <h1 className="font-weight-bold">Inventory</h1>
                  {/* <div className="col"><OutDevices rentedDevices={this.state.rentedDevices} /></div> */}
                  <div className="col p-3"><Inventory data={this.state.allDevices} /></div>
                </div>
              </div>
            </React.Fragment>
          )} />
          <Route path="/requestdevice" render={props => (
            <React.Fragment>
              <Navbar />
              <div className="container bg-secondary rounded mt-3 mb-3 border border-primary">
                <div className="container bg-dark mb-3 mt-3 text-center text-primary border border-primary rounded">
                  <h1 className="font-weight-bold">Request Device</h1>
                  {/* <div className="col"><OutDevices rentedDevices={this.state.rentedDevices} /></div> */}
                  <div className="col p-3"><RequestDevice /></div>
                </div>
              </div>
            </React.Fragment>
          )} />
          <Route path="/reportissue" render={props => (
            <React.Fragment>
              <Navbar />
              <div className="container bg-secondary rounded mt-3 mb-3 border border-primary">
                <div className="container bg-dark mb-3 mt-3 text-center text-primary border border-primary rounded">
                  <h1 className="font-weight-bold">Report Issue</h1>
                  {/* <div className="col"><OutDevices rentedDevices={this.state.rentedDevices} /></div> */}
                  <div className="col p-3"><ReportIssue /></div>
                </div>
              </div>
            </React.Fragment>
          )} />
          <Route exact path="/admin" render={props => (
            <React.Fragment>
              <Admin />
            </React.Fragment>
          )} />
          <Route path="/admin/adddevice" render={props => (
            <React.Fragment>
              <AdminNav />
              <div className="container bg-secondary rounded mt-3 mb-3 border border-primary">
                <div className="container bg-dark mb-3 mt-3 text-center text-primary border border-primary rounded">
                  <React.Fragment>
                    <h1 className="font-weight-bold">Add Device</h1>
                    {/* <div className="col"><OutDevices rentedDevices={this.state.rentedDevices} /></div> */}
                    <div className="col p-3">
                      <AddDevice />
                    </div>
                  </React.Fragment>
                </div>
              </div>
            </React.Fragment>
          )} />
          <Route path="/admin/manageusers" render={props => (
            <React.Fragment>
              <AdminNav />
              <div className="container bg-secondary rounded mt-3 mb-3 border border-primary">
                <div className="container bg-dark mb-3 mt-3 text-center text-primary border border-primary rounded">
                  <React.Fragment>
                    <h1 className="font-weight-bold">Manage Users</h1>
                    {/* <div className="col"><OutDevices rentedDevices={this.state.rentedDevices} /></div> */}
                    <div className="col p-3">
                      <ManageUsers />
                    </div>
                  </React.Fragment>
                </div>
              </div>
              <div className="container bg-secondary rounded mt-3 mb-3 border border-primary">
                <div className="container bg-dark mb-3 mt-3 text-center text-primary border border-primary rounded">
                  <React.Fragment>
                    <h1 className="font-weight-bold">Users</h1>
                    {/* <div className="col"><OutDevices rentedDevices={this.state.rentedDevices} /></div> */}
                    <div className="col p-3">
                      <Users data={this.state.users} />
                    </div>
                  </React.Fragment>
                </div>
              </div>
            </React.Fragment>
          )} />
          <Route path="/admin/editinventory" render={props => (
            <React.Fragment>
              <AdminNav />
              <div className="container bg-secondary rounded mt-3 mb-3 border border-primary">
                <div className="container bg-dark mb-3 mt-3 text-center text-primary border border-primary rounded">
                  <React.Fragment>
                    <h1 className="font-weight-bold">Edit Inventory</h1>
                    {/* <div className="col"><OutDevices rentedDevices={this.state.rentedDevices} /></div> */}
                    <div className="col p-3">
                      <EditInventory data={this.state.allDevices} />
                    </div>
                  </React.Fragment>
                </div>
              </div>
            </React.Fragment>
          )} />
        </div>
      </Router>

    );
  }

}

export default App;
