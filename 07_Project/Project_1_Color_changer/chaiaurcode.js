var buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
 
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id == 'grey') {
      // body.style.backgroundColor = e.target.id;
      body.setAttribute("style" , `background-color: ${e.target.id}`);  //Optimize way to change background color.
    }
    if (e.target.id == 'white') {
      // body.style.backgroundColor = e.target.id;
      body.setAttribute("style" , `background-color: ${e.target.id}`);
    }
    if (e.target.id == 'blue') {
      // body.style.backgroundColor = e.target.id;
      body.setAttribute("style" , `background-color: ${e.target.id}`);
    }
    if (e.target.id == 'yellow') {
      // body.style.backgroundColor = e.target.id;
      body.setAttribute("style" , `background-color: ${e.target.id}`);
    }
  });
});