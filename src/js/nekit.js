import axios from 'axios';
import { getPosts } from './olexii';

const form = document.querySelector('.form');
const posts = document.querySelector('.post');

form.addEventListener('submit', async e => {
  e.preventDefault();
  console.log(form.elements);
  const data = {
    email: form.elements.email.value,
    nickname: form.elements.nickname.value,
    massage: form.elements.message.value,
  };
  const response = await axios.post('http://localhost:3000/posts', data);
  console.log(response.data);
  posts.innerHTML = '';
  getPosts();
});
document.addEventListener('click', async e => {
  if (e.target.classList.contains('update')) {
    const id = e.target.id;
    updatePost(id);
  }
});
async function updatePost(id) {
  const data = {
    email: form.elements.email.value,
    nickname: form.elements.nickname.value,
    message: form.elements.message.value,
  };
  const response = await axios.put(`http://localhost:3000/posts/${id}`, data);
  console.log(response.data);
  posts.innerHTML = '';
  getPosts();
}
