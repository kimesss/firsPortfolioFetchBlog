import initMd from 'markdown-element';
import game from './game/random';
import main from './github/index';
import joke from './joke/Joke';
import { getBlogPost } from './github/service';

getBlogPost('post1.md').then((blogPost) => {
  const md = document.createElement('mark-down');
  md.textContent = blogPost;
  document.body.appendChild(md);
});
