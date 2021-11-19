import { GitHubRepo } from './GitHubRepo';

const REPOS_URL = 'https://api.github.com/users/kimesss/repos';
const POST_URL = 'https://github.com/kimesss/kimesss.github.io/blob/main/Blog/';

const convert = ({
  name,
  stargazers_count: stars,
  license,
}) => new GitHubRepo({
  name,
  stars,
  license: license ? license.spdx_id : '',
});

export default function getRepos() {
  return fetch(REPOS_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } throw Error('Respons not 200');
    }).then((arr) => arr.map((r) => convert(r)))
    .catch((err) => console.warn(err))
    .then((arr) => arr.forEach((r) => alert(r)));
}

export function getBlogPost(name) {
  return fetch(`${POST_URL}${name}`)
    .then((response) => {
      if (response.ok) {
        return response.text();
      } throw Error('Respons not 200');
    });
}
