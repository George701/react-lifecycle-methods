import React, { Component } from 'react';
import showToast from './showToast';
import { loadPosts } from './services'

export default class App extends Component {
  constructor(props) {
    super(props);

    // showToast('constructor()');
    this.state = {
      posts: []
    }
  }

  static getDerivedStateFromProps() {
    // showToast('getDerivedStateFromProps()')
  }
  
  async componentDidMount() {
    const posts = await loadPosts();
    this.setState({ posts })
  }

  render() {
    console.log(this.state.posts);
    return (
      <div>App</div>
    )
  }
}
