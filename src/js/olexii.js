import axios from 'axios';

const div = document.querySelector('.post');
export async function getPosts() {
  try {
    const get = await axios.get('http://localhost:3000/posts');
    createHtml(get.data);
  } catch (error) {
    console.log(error.message);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  getPosts();
});

export function createHtml(posts) {
  const markup = posts
    .map(item => {
      return `
    <article>
      <h2>${item.nickname}</h2>
      <p>${item.email}</p>
      <p>${item.message}</p>
      <button class="update" id="${item.id}">update</button>
      <button class="delete" id="${item.id}">delete</button>
    </article>
    `;
    })
    .join('');

  div.insertAdjacentHTML('beforeend', markup);
}
