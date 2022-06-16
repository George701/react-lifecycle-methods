import React, { Component } from 'react';
import './Post.css';
import { profiles } from '../../constants';

export default class Post extends Component {
  constructor(props) {
    super(props);

    // console.log(props);

    this.state = {
      userId: props.userId,
      id: props.id,
      title: props.title,
      body: props.body,
    }
  }
  render() {
    const {id, userId, title, body} = this.state;

    const person = profiles[userId-1];

    return (
      <div className='wrapper'>
        <div className='person'>
          <img className='avatar' src={person.avatar} alt="avatar" />
          <div className='name'>{person.name}</div>
        </div>
      </div>
    )
  }
};

const findPerson = (id) => {
}
