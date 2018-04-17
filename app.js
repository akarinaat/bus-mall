'use strict';

var buttonNumber1 = document.getElementById('button-1');

var buttonNumber2 = document.getElementById('button-2');

var buttonNumber3 = document.getElementById('button-3');

function Product(url) {
  this.url = url;
  this.votes = 0;

}


var allProducts = [
  new Product('img/bag.jpg'),
  new Product('img/banana.jpg'),
  new Product('img/bathroom.jpg'),
  new Product('img/boots.jpg'),
  new Product('img/breakfast.jpg'),
  new Product('img/bubblegum.jpg'),
  new Product('img/chair.jpg'),
  new Product('img/cthulhu.jpg'),
  new Product('img/dog-duck.jpg'),
  new Product('img/dragon.jpg'),
  new Product('img/pen.jpg'),
  new Product('img/pet-sweep.jpg'),
  new Product('img/scissors.jpg'),
  new Product('img/shark.jpg'),
  new Product('img/sweep.png'),
  new Product('img/tauntaun.jpg'),
  new Product('img/unicorn.jpg'),
  new Product('img/usb.gif'),
  new Product('img/water-can.jpg'),
  new Product('img/water-glass.jpg')

];

var buttonNumber1 = [0];
var buttonNumber2 = [1];
var buttonNumber3 = [2];

buttonNumber1.addEventListener('click', function (e) {
  buttonNumber1.votes++;

});

buttonNumber2.addEventListener('click', function (e) {
  buttonNumber2.votes++;

});

buttonNumber3.addEventListener('click', function (e) {
  buttonNumber3.votes++;

});