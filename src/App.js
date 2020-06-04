import React, { Component } from 'react';
import './App.css';
import Bike from './Bike/Bikes';

class App extends Component {

  state = {
    Bikes: [
      { name: "autor", year: 2400 },
      { name: "ardis", year: 1900 },
    ],
    titlePage: "React components"
  }
  changeTitleHandler = (newTitle) => {
    this.setState({
      titlePage: newTitle
    })
  }
  changeInput = (e) => {
    this.setState({
      titlePage: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.titlePage}</h1>
        <button onClick={this.changeTitleHandler.bind(this, 'Change')}>Change Title</button>
        <input type="text" onChange={this.changeInput} />
        {this.state.Bikes.map((bike, index) => {
          return (<Bike
            key={index}
            name={bike.name}
            year={bike.year}
            onClakB={() => this.changeTitleHandler(bike.name)}
          />
          )
        })}
        {/* <Bike
        onClakB={this.changeTitleHandler.bind(this, bikes[0].name )}
         name={bikes[0].name} 
         year={bikes[0].year}/>

        <Bike
        onClakB={() => this.changeTitleHandler(bikes[1].name)}
        name={bikes[1].name}
         year={bikes[1].year}/> */}
      </div>
    );
  }
}

export default App;
