import React from 'react';
import './App.css';
import PlayerCard from "./components/playerCard";
import 'semantic-ui-css/semantic.min.css';
import axios from "axios";
import NavBar from "./components/Navbar";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      playerData: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      // .then(res => res.json())
      // .then(res => console.log(res))
      .then(res => this.setState({ playerData: res.data }))
      .catch(err => console.log(err));
    }

    render() {
      console.log(this.state);
      return (
        <div className="App">
          <NavBar />
          <PlayerCard playerData={this.state.playerData} />
        </div>
      );
    }
    
  }//App


export default App;
