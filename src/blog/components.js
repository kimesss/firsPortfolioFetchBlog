/* eslint-disable import/prefer-default-export,no-undef,no-unused-vars */
import { getBlogPost } from '../github/service';

export class BlogPost extends HTMLElement {
  // noinspection JSUnusedGlobalSymbols
  static get observedAttributes() {
    return ['post-name'];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  async render() {
    this.clean();
    const name = this.getAttribute('post-name');
    const md = document.createElement('mark-down');
    md.textContent = (await getBlogPost(`${name}.md`));
    // this.shadow.appendChild(md);
    this.shadow.innerHTML = `${md.outerHTML}`;
  }

  // noinspection JSUnusedGlobalSymbols
  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  clean() {
    this.shadow.childNodes.forEach((child) => child.remove());
  }
}
