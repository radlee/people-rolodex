import React, { Component } from 'react';
import logo from './reactdev.png';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    //State ->
    //JavaScript Object with properrties that we 
    //can access at any point inside of our class
    this.state = {
      people : [
        {
          name : "General Mister",
          id : "as123"
        },
        {
          name : "Count Dracular ",
          id : "as345"
        },
        {
          name : "Vlad - The Impaler",
          id: "as897"
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <br></br>
        <img src={logo} alt="logo" height="50px"/>;
        <h1>-People Rolodex-</h1>
      {
        this.state.people.map(people => <h2 key={ people.id }>{ people.name }</h2>)
      }
    </div>
    )
  }
}

export default App;
