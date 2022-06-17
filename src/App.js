import React, { Component } from 'react';
import './App.css';
import { loadPosts, deletePostAPI, addPost } from './services';
import Post from './Components/Post';
import EditPost from './Components/EditPost';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      creatingNewPost: false,
      loadingPosts: true,
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
    this.setState({ loadingPosts: false });
  }

  render() {
    const { posts, loadingPosts, creatingNewPost } = this.state;
    
    return (
      <div className='wrapper'>
        {
          creatingNewPost
          ? <EditPost closeModal={this.newPostDisplay} editPost={this.editPost}/>
          : (
            <div className='new-post'>
              <div className='btn' onClick={() => this.newPostDisplay()}>
                New
              </div>
            </div>
          )
        }
        { loadingPosts && <div>loading posts...</div> }
        { (!loadingPosts && posts.length === 0) && <div>There is no posts yet</div> }
        { (!loadingPosts  && posts.length !== 0)
          && posts.map(post => (
            <Post key={post.id} {...post} deletePost={this.deletePost} />)
          )
        }
      </div>
    )
  }

  deletePost = async id => {
    const { posts } = this.state;
    const status = await deletePostAPI(id);
    if (status === 200) {
      const result = posts.filter(post => post.id !== id);
      this.setState({ posts: result })
    }
  }

  newPostDisplay = () => {
    const { creatingNewPost } = this.state;
    this.setState({ creatingNewPost: !creatingNewPost})
  }

  editPost = async (id, userId, title, body) => {
    const { posts } = this.state;
    if (!!id) {

    } else {
      const model = { userId, id: posts.length+1, title, body };
      posts.unshift(model);
      const status = await addPost(model);
      if (status === 201) {
        this.setState({ posts });
      }
    }

    this.newPostDisplay();
  }
}
