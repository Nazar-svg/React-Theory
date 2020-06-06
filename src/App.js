import React, { Component } from 'react';
import './App.css';
import Bike from './Bike/Bikes';

class App extends Component {

  state = {
    Bikes: [
      { name: "autor", year: 2400 },
      { name: "ardis", year: 1900 },
    ],
    titlePage: "React components",
    shownBike: false
  }
  toglleBikeHandler = () => {
    this.setState({
      shownBike: !this.state.shownBike
    })
  }
  onChangeName(name, index) {
    const bike = this.state.Bikes[index]
    bike.name = name
    const bikes = [...this.state.Bikes]
    bikes[index] = bike
    this.setState({ bikes })
  }

  render() {
    let bikes = null
    if (this.state.shownBike) {
      bikes = this.state.Bikes.map((bike, index) => {
        return (<Bike
          key={index}
          name={bike.name}
          year={bike.year}
          onChangeName={event => this.onChangeName(event.target.value, index)}
        />
        )
      })
    }
    return (
      <div className="App">
        <h1>{this.state.titlePage}</h1>
        <button onClick={this.toglleBikeHandler}>Toglle Bike</button>
        {bikes}
      </div>
    );
  }
}

export default App;
