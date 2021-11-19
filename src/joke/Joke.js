class Joke {
  constructor({ joke }) {
    this.joke = joke;
  }

  toString() {
    return `${this.joke} `;
  }
}
const convert = ({
  value: {
    joke,

  },
}) => new Joke({
  joke,
});

export default function get() {
  return fetch('https://api.icndb.com/jokes/random')
    .then((response) => response.json())
    .then((arr) => convert(arr)).then((q) => alert(q));
}
