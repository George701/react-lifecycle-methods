import axios from 'axios';
import showToast from './showToast';

export const loadPosts = async () => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    showToast('Посты загружены')
    return res.data;
  } catch (error) {
    console.error(error)
    showToast('Ошибка подгрузки постов', true)
    return [];
  }
}