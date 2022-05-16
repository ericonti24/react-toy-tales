import React, { Component } from 'react';

class ToyCard extends Component {

  handleDonate = (id) => {
    this.props.onDonateToy(id)
  }

  handleLike = (toy) => {
    this.props.onLikeToy(toy)
  }
  render() {
    const { toy } = this.props
    const { name, image, likes, id } = toy
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button onClick={() => this.handleLike(toy)} className="like-btn">Like {'<3'}</button>
        <button onClick={() => this.handleDonate(id)} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
