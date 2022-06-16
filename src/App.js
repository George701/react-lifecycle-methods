import React, { Component } from 'react';
import showToast from './showToast';
import { loadPosts } from './services';
import Post from './Components/Post';
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);

    // showToast('constructor()');
    this.state = {
      loading: true,
      posts: []
    }
  }

  // static getDerivedStateFromProps() {
  //   // showToast('getDerivedStateFromProps()')
  // }
  
  async componentDidMount() {
    const posts = await loadPosts();
    // console.log(posts);
    if (posts.length !== 0) {
      this.setState({ posts })
    }
    this.setState({ loading: false });
  }

  render() {
    const { posts, loading } = this.state;
    return (
      <div className='wrapper'>
        { loading && <div>Loading...</div> }
        { (!loading && posts.length === 0) && <div>There is no posts yet</div> }
        { (!loading  && posts.length !== 0) && posts.map(post => <Post key={post.id} {...post} />) }
      </div>
    )
  }
}
