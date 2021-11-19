export default function game() {
  function yourNumber() {
    return prompt('wybierz liczbe od 0 do 50');
  }
  const randomNumber = Math.floor(Math.random() * 50 + 1);
  let counter = 0;
  console.log(randomNumber);

  function start() {
    const x = parseInt(yourNumber(), 10);
    counter += 1;
    if (Number.isInteger(x)) {
      if (x === randomNumber) {
        alert(`zgadłes za ${counter} razem`);
      } else {
        if (x > randomNumber) {
          alert('za duzo');
        } else {
          alert('za mało');
        }

        start();
      }
    } else { start(); }
  }
  start();
}
