import React, { Component } from 'react';
import './Post.css';
import { profiles } from '../../constants';

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: props.userId,
      id: props.id,
      title: props.title,
      body: props.body,
    }
  }
  render() {
    const {id, userId, title, body} = this.state;
    const { deletePost } = this.props;

    const person = profiles[userId-1];

    return (
      <div className='post-wrapper'>
        <div className='controller-wrapper'>
          <div className='btn edit'>Edit</div>
          <div className='btn delete' onClick={() => deletePost(id)}>Delete</div>
        </div>
        <div className='person'>
          <img className='avatar' src={person.avatar} alt="avatar" />
          <div className='name'>{person.name}</div>
        </div>
        <div>
          <div className='title'>
            {title}
          </div>
          <div className='body'>
            {body}
          </div>
        </div>
      </div>
    )
  }
};
