import axios from 'axios';
import showToast from './showToast';

export const loadPosts = async () => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    showToast('Posts are Loaded')
    return res.data;
  } catch (error) {
    console.error(error)
    showToast('Error loading posts', true)
    return [];
  }
}

export const deletePostAPI = async id => {
  try {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    showToast('Post is deleted');
    return res.status;
  } catch (error) {
    console.error(error)
    showToast('Error deleting the post', true);
    return 500;
  }
}

export const addPost = async (model) => {
  try {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/posts/`, model);
    showToast('New post added');
    return res.status;
  } catch (error) {
    console.error(error)
    showToast('Error adding the post', true);
    return 500;
  }
}