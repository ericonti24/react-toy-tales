import React, { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  image:''
}
class ToyForm extends Component {

  state = INITIAL_STATE

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value,
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onAddToy(this.state)
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input 
            onChange={this.handleChange} 
            value={this.state.name} 
            type="text" 
            name="name" 
            placeholder="Enter a toy's name..." 
            className="input-text"
          />
          <br/>
          <input 
            onChange={this.handleChange} 
            value={this.state.image} 
            type="text" 
            name="image" 
            placeholder="Enter a toy's image URL..." 
            className="input-text"
          />
          <br/>
          <input 
            type="submit" name="submit" 
            value="Create New Toy" 
            className="submit"
          />
        </form>
      </div>
    );
  }

}

export default ToyForm;
