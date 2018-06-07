// Elements
var inputInch = document.querySelector('#inch');
var inputCm = document.querySelector('#cm');

function inchToCm(e) {
  if(e.srcElement.value > 0) {
    console.log(e.srcElement.value * 2.54);
  }
}

function cmToInch(e) {
  if(e.srcElement.value > 0) {
    console.log(e.srcElement.value / 2.54);
  }
}


console.log(inputCm.value);