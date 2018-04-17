'use strict';

//Here I'm accesing to th elements in HTML
//Elements from the DOM at the top.
var buttonNumber1 = document.getElementById('button-1');
var buttonNumber2 = document.getElementById('button-2');
var buttonNumber3 = document.getElementById('button-3');

var product1Image = document.getElementById('img1');
var product2Image = document.getElementById('img2');
var product3Image = document.getElementById('img3');

//function Goat()

var product1Votes = 0;
var product2Votes = 0;
var product3Votes = 0;

//I want to know how many votes does each button get WHEN CLICKED!!!
//I want a function that tracks that.
//Where am i listening: I'm listening at buttonNumber1
buttonNumber1.addEventListener('click', function (e){
  //I WANT THIS FUNCTION TO INCREMENT THE VOTE COUNT of this button
  product1Votes++; //the number of this clicks

});

buttonNumber2.addEventListener('click', function(e){
  //When I'm console.loging I need to write product1/2/ 3Votesto see the conuter.
  product2Votes++;
});

buttonNumber3.addEventListener('click', function(e){
  product3Votes++;
});




//Here are all my instances
// var allProducts = [
//   new Product('img/bag.jpg'),
//   new Product('img/banana.jpg'),
//   new Product('img/bathroom.jpg'),
//   new Product('img/boots.jpg'),
//   new Product('img/breakfast.jpg'),
//   new Product('img/bubblegum.jpg'),
//   new Product('img/chair.jpg'),
//   new Product('img/cthulhu.jpg'),
//   new Product('img/dog-duck.jpg'),
//   new Product('img/dragon.jpg'),
//   new Product('img/pen.jpg'),
//   new Product('img/pet-sweep.jpg'),
//   new Product('img/scissors.jpg'),
//   new Product('img/shark.jpg'),
//   new Product('img/sweep.png'),
//   new Product('img/tauntaun.jpg'),
//   new Product('img/unicorn.jpg'),
//   new Product('img/usb.gif'),
//   new Product('img/water-can.jpg'),
//   new Product('img/water-glass.jpg')

// ];




























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