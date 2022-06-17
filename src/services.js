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

export const deletePostAPI = async id => {
  try {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    showToast('Пост успешно удален');
    return res.status;
  } catch (error) {
    console.error(error)
    showToast('Ошибка удаления поста', true);
    return 500;
  }
}