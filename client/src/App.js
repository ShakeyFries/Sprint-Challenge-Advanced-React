import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import PlayerCard from "./components/playerCard";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      playerData: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => console.log(res))
      .then(res => this.setState({ userData: res }))
      .catch(err => console.log(err));
    }

    render() {
      console.log(this.state);
      return (
        <div className="App">
          <h1>Soccer Players</h1>
          <PlayerCard playerData={this.state.playerData} />
        </div>
      );
    }
    
  }


export default App;
