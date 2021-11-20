import initMd from 'markdown-element';
import game from './game/random';
import main from './github/index';
import { getAboutMe, getBlogPost } from './github/service';
import get from './joke/Joke';
import init from './blog/index';
import initt from './aboutMe/index';
import piszewkonso from './pageHendler/index';

piszewkonso();
initt();
// const section = document.getElementById('aboutMe');
// getAboutMe('about-me.md').then((blogPost) => {
//   const me = document.createElement('mark-down');
//   me.textContent = blogPost;
//   section.appendChild(me);
// });

window.controls = {
  game,
  get,
  piszewkonso,
};

// const jokee = document.getElementById('jokee');
// jokee.addEventListener('click', get);
// const gamee = document.getElementById('gamee');
// gamee.addEventListener('click', game);

init();

// getBlogPost('post1.md').then((blogPost) => {
//   const md = document.createElement('mark-down');
//   md.textContent = blogPost;
//   document.body.appendChild(md);
// // });
