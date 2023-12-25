const clock = document.getElementById('clock');
const clock1 = document.querySelector('#clock');

const date = new Date();
console.log(date.toLocaleTimeString());

// cronjob will use in server but setInterval is used to run any function concurrently at particular interval.


setInterval(function () {
  let date = new Date();
  //clock.innerHTML = date.toLocaleTimeString();
  clock.replaceChildren(document.createTextNode(`${date.toLocaleTimeString()}`))
}, 1000);
