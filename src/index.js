import initMd from 'markdown-element';
import game from './game/random';
import main from './github/index';
import joke from './joke/Joke';
import { getAboutMe, getBlogPost } from './github/service';
import get from './joke/Joke';

const section = document.getElementById('aboutMe');
getAboutMe('about-me.md').then((blogPost) => {
  const me = document.createElement('mark-down');
  me.textContent = blogPost;
  section.appendChild(me);
});

const jokee = document.getElementById('jokee');
jokee.addEventListener('click', get);
const gamee = document.getElementById('gamee');
gamee.addEventListener('click', game);
// const blog = document.getElementById('blog');
// jokee.addEventListener('click', get);

// getBlogPost('post1.md').then((blogPost) => {
//   const md = document.createElement('mark-down');
//   md.textContent = blogPost;
//   document.body.appendChild(md);
// });
