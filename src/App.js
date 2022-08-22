
import './App.css';
import React, { Component } from 'react'
import Header from './components/Header';
import { Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import AddTrip from './components/AddTrip';
import Display from './components/Display';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      trips: [
        { date: "2017-04-10", place: "Manali", type: "trek" },
        { date: "2022-05-07", place: "Mumbai", type: "club" },
        { date: "2021-08-09", place: "Goa", type: "tropic" },
        { date: "2020-10-21", place: "Darjeeling", type: "trek" }
      ]
    }
  }
  addTrip = (newTrips) => {
    this.setState({
      trips: [...newTrips]
    })
  }
  render() {
    return (
      <>
          <Header />
          <div className="workplace">
            <Routes>
              <Route exact path="/" element={<Home trips={this.state.trips} />} />
              <Route path="/addTrip" element={<AddTrip addTrip={this.addTrip} trips={this.state.trips} />} />
              <Route path="/display" element={<Display trips={this.state.trips} />} />
            </Routes>
          </div>
      </>
    );
  }
}