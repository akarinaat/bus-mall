'use strict';

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

function Product(src) {
  this.src = src;
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
//Here I'm saying that these variables are these pictures.
var product1 = allProducts[0];
var product2 = allProducts[1];
var product3 = allProducts[2];

//I want to know how many votes does each button get WHEN CLICKED!!!
//I want a function that tracks that.
//Where am i listening: I'm listening at buttonNumber1

buttonNumber1.addEventListener('click', function (e){
  //I WANT THIS FUNCTION TO INCREMENT THE VOTE COUNT of this button
  product1.votes++;
  changeImage()

});

buttonNumber2.addEventListener('click', function(e){
  //When I'm console.loging I need to write product1/2/ 3Votesto see the conuter.
  product2.votes++;
  changeImage()
});

buttonNumber3.addEventListener('click', function(e){
  product3.votes++;
  changeImage()
});

//Now I want to change the images with every click.
//Here are all my instances. All my products.


//Quiero que cambie la imagen randomly, so that's why I'm multiplyin por un numero randon del 1 al 25, que el el length de mi array de imagenes. And I use Math.floor because I rounded it down, from 0 to 25.
  
  //I have to find the element I want to change, and that I do with the html if from the image.
function changeImage() {
  product1 = allProducts[Math.floor(Math.random() * allProducts.length)];
  product1Image.src = product1.src;
  product2 = allProducts[Math.floor(Math.random() * allProducts.length)];
  product2Image.src = product2.src;
  product3 = allProducts[Math.floor(Math.random() * allProducts.length)];
  product3Image.src = product3.src;

}




























// var buttonNumber1 = allProducts[0];
// var buttonNumber2 = allProducts[1];
// var buttonNumber3 = allProducts[2];

// buttonNumber1.addEventListener('click', function (e)

// {
//   buttonNumber1.votes++;
//   buttonNumber1 = allProducts[Math.floor(Math.random() * allProducts.lenghth)];
//   product1Image.src = buttonNumber1.url;
//   buttonNumber2.votes++;
//   buttonNumber2 = allProducts[Math.floor(Math.random() * allProducts.lenghth)];
//   product2Image.src = buttonNumber2.url;


// });

// buttonNumber2.addEventListener('click', function (e) {


// });

// buttonNumber3.addEventListener('click', function (e) {
//   buttonNumber3.votes++;
//   buttonNumber3 = allProducts[Math.floor(Math.random() * allProducts.lenghth)];
//   product3Image.src = buttonNumber3.url;

// });