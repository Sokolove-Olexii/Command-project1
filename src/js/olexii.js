import axios from 'axios';
// console.log('hello Olexii');
const div = document.querySelector('.post');
export async function getPosts() {
  const get = await axios.get('http://localhost:3000/posts');
  createHtml(get.data);
}

getPosts();

export function createHtml(posts) {
  const markup = posts
    .map(item => {
      return `
      <h2>${item.nickname}</h2>
      <p>${item.email}</p>
      <p>${item.message}</p>
    `;
    })
    .join('');

  div.insertAdjacentHTML('beforeend', markup);
}
