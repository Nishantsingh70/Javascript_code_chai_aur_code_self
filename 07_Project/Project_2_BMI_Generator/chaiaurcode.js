const form = document.querySelector('form');

// this usecase will give you empty value
//  const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    //result.innerHTML = `Please give a valid height ${height}`;
    result.replaceChildren(document.createTextNode(`"Please give a valid height ${height}"`))
  } 
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    // result.innerHTML = `Please give a valid weight ${weight}`;
    result.replaceChildren(document.createTextNode(`"Please give a valid height ${weight}"`))
  } 
  else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    // result.innerHTML = `<span>${BMI}</span>`;
    if (BMI < 18.6) {
      result.innerHTML = `<span>${BMI}</span> <br /> Under Weight`;
    } 
    else if (BMI > 18.6 && BMI < 24.9) {
      result.innerHTML = `<span>${BMI}</span> <br /> Normal Weight`;     
 
    } 
    else if (BMI > 24.9) {
      result.innerHTML = `<span>${BMI}</span> <br /> Overweight`;
    }
  }
});
