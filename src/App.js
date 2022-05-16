import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'
const API = `http://localhost:3000/toys`


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(data => {this.setState({toys: data})})
  }

  addToy = (toy) => {
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify(toy)
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState(toy => {
      return {toys: [...toy.toys, data]}
      })
    })
  }

  donateToy = (toyID) => {
    fetch(`${API}/${toyID}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(() => {
      this.setState(toy => {
        return {toys: toy.toys.filter(toy => toy.id !== toyID)}
      })
    })
  }  

  likeToy = (currentToy) => {
    fetch(`${API}/${currentToy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify({
        likes: currentToy.likes += 1
      })
    })
    .then(resp => resp.json())
    .then(() => {
      this.setState(prev => {
        return { toys: [...prev.toys]}
      })
    })
  }
  

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm onAddToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} donateToy={this.donateToy} onLikeToy={this.likeToy}/>
      </>
    );
  }

}

export default App;
