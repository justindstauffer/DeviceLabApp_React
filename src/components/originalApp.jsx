import React, { Component } from 'react';
import './App.css';
import CheckIn from './components/checkIn';
import CheckOut from './components/checkOut';
import CurrentlyRented from './components/currentlyRented';
import Header from './components/header';
import Navbar from './components/navbar';
import SubmitInOut from './components/submitInOut';
import axios from 'axios';

class App extends Component {
  state = {
    rentedDevices: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/outdevices')
      .then(res => this.setState({ rentedDevices: res.data }))
  }

  checkIn = async (imei) => {
    const checkImei = Number(imei);
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

    this.setState({
      rentedDevices: this.state.rentedDevices.filter(device => device.imei !== checkImei)
    });
  }

  checkOut = async (imei) => {
    await axios
      .post("http://localhost:5000/api/outdevices", {
        imei: imei
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    await axios.get('http://localhost:5000/api/outdevices')
      .then(res => this.setState({ rentedDevices: res.data }))
  }

  submitInOut = async () => {
    
  }

  render() {
    return (
      <div className="App bg-dark">
        <Header />
        <Navbar />
        <div className="container bg-secondary rounded mb-3 mt-3 border border-primary">
          <div className="row p-3">
            <div className="col"><CheckIn checkIn={this.checkIn} /></div>
            <div className="col"><CheckOut checkOut={this.checkOut} /></div>
            <SubmitInOut checkOut={this.checkOut} />
          </div>
        </div>
        <div className="container bg-secondary rounded mb-3 border border-primary">
          <div className="container bg-dark mb-3 mt-3 text-center text-primary border border-primary rounded">
            <h1 className="font-weight-bold">Currently Rented Devices</h1>
            {/* <div className="col"><OutDevices rentedDevices={this.state.rentedDevices} /></div> */}
            <div className="col p-3"><CurrentlyRented data={this.state.rentedDevices} /></div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
