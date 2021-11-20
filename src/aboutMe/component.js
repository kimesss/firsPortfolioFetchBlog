import { getBlogPost } from '../github/service';

export default class AboutMe extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.render();
  }

  async render() {
    const md = document.createElement('mark-down');
    md.textContent = (await getBlogPost('about-me.md'));
    // this.shadow.appendChild(md);
    this.shadow.innerHTML = `${md.outerHTML}`;
  }
}
