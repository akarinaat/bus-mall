'use strict';
//Need counter que me ayudará con el 25 veces.
var counter = 0;
console.log(counter);
//Here I'm accesing to th elements in HTML
//Elements from the DOM at the top.
var buttonNumber1 = document.getElementById('button-1');
var buttonNumber2 = document.getElementById('button-2');
var buttonNumber3 = document.getElementById('button-3');

var product1Image = document.getElementById('img1');
var product2Image = document.getElementById('img2');
var product3Image = document.getElementById('img3');

//I'm going to create a constructor function to change the images WHEN ONE of th ebuttons is clicked.
//What do I want to change? The source.

function Product(src, name) {
  this.src = src;
  this.name = name;
  this.votes = 0;


}

var allProducts = [
  new Product('img/bag.jpg','R2D2 Bag'),
  new Product('img/banana.jpg','Banana slicer'),
  new Product('img/bathroom.jpg','Bathroom iPad'),
  new Product('img/boots.jpg', 'Rain boots'),
  new Product('img/breakfast.jpg', 'Breakfast machine'),
  new Product('img/bubblegum.jpg', 'Bubble Gum balls'),
  new Product('img/chair.jpg', 'Red chair'),
  new Product('img/cthulhu.jpg', 'Green Monster'),
  new Product('img/dog-duck.jpg', 'Dog-Duck'),
  new Product('img/dragon.jpg', 'Dragon meat'),
  new Product('img/pen.jpg', 'Pen lid'),
  new Product('img/pet-sweep.jpg', 'Pet Sweep'),
  new Product('img/scissors.jpg', 'Pizza scissors'),
  new Product('img/shark.jpg', 'Shark sleeping bag'),
  new Product('img/sweep.png', 'Baby sweep'),
  new Product('img/tauntaun.jpg', 'Tauntaun'),
  new Product('img/unicorn.jpg','Unicorn meat'),
  new Product('img/usb.gif', 'Octo USB'),
  new Product('img/water-can.jpg','Water can'),
  new Product('img/wine-glass.jpg','Wine Glass')

];

//percentage

//Here I'm saying that these variables are these pictures.
var product1 = allProducts[0];
var product2 = allProducts[1];
var product3 = allProducts[2];

//I want to know how many votes does each button get WHEN CLICKED!!!
//I want a function that tracks that.
//Where am i listening: I'm listening at buttonNumber1

//I WANT THIS FUNCTION TO INCREMENT THE VOTE COUNT of this button

//When I'm console.loging I need to write product1/2/ 3Votesto see the conuter.



var ulElement = document.getElementById('counter-list');

function renderList(){
  for(var i = 0; i < allProducts.length; i++){
    var listElement = document.createElement('li');
    listElement.textContent = allProducts[i].name + ' ' + allProducts[i].votes;
    ulElement.appendChild(listElement);
  }
}

function handleClickImg1() {
  counter++;
  product1.votes++;
  stopImages();
  changeImage();
}

function handleClickImg2() {
  counter++;
  product2.votes++;
  stopImages();
  changeImage();
}

function handleClickImg3() {
  counter++;
  product3.votes++;
  stopImages();
  changeImage();

}

buttonNumber1.addEventListener('click', handleClickImg1);
buttonNumber2.addEventListener('click', handleClickImg2);
buttonNumber3.addEventListener('click', handleClickImg3);

function stopImages() {
  if(counter === 25) {
    console.log('counter is 5');
    buttonNumber1.removeEventListener('click', handleClickImg1);
    buttonNumber2.removeEventListener('click', handleClickImg2);
    buttonNumber3.removeEventListener('click', handleClickImg3);
    renderList();
  }
}

function changeImage() {
  product1 = allProducts[Math.floor(Math.random() * allProducts.length)];
  product1Image.src = product1.src;
  product2 = allProducts[Math.floor(Math.random() * allProducts.length)];
  product2Image.src = product2.src;
  product3 = allProducts[Math.floor(Math.random() * allProducts.length)];
  product3Image.src = product3.src;

}

changeImage();


