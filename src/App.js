import React, { Component } from 'react';
import './App.css';
import { loadPosts, deletePostAPI } from './services';
import Post from './Components/Post';

export default class App extends Component {
  constructor(props) {
    super(props);

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
    if (posts.length !== 0) {
      this.setState({ posts })
    }
    this.setState({ loading: false });
  }

  deletePost = async id => {
    const { posts } = this.state;
    const status = await deletePostAPI(id);
    if (status === 200) {
      const result = posts.filter(post => post.id !== id);
      this.setState({ posts: result })
    }
  }

  render() {
    const { posts, loading } = this.state;
    return (
      <div className='wrapper'>
        { loading && <div>Loading...</div> }
        { (!loading && posts.length === 0) && <div>There is no posts yet</div> }
        { (!loading  && posts.length !== 0) && posts.map(post => <Post key={post.id} {...post} deletePost={this.deletePost} />) }
      </div>
    )
  }
}
