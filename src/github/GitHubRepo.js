// eslint-disable-next-line import/prefer-default-export
export class GitHubRepo {
  constructor({ name, stars, license }) {
    this.name = name;
    this.stars = stars;
    this.license = license;
  }

  get starsInfo() {
    return this.stars > 0 ? `(${this.stars} gwiazdek)` : '';
  }

  toString() {
    return `${this.name} ${this.starsInfo} `;
  }
}
