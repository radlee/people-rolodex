import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    //State ->
    //JavaScript Object with properrties that we 
    //can access at any point inside of our class
    this.state = {
      people : [
        {
          name : "General",
          id : "as123"
        },
        {
          name : "Dracular",
          id : "as345"
        },
        {
          name : "Zombie",
          id: "as897"
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <h1>People Rolodex</h1>
      {
        this.state.people.map(people => <h2 key={ people.id }>{ people.name }</h2>)
      }
    </div>
    )
  }
}

export default App;
