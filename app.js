'use strict';
//Need counter que me ayudará con el 25 veces.
var counter = 0;
console.log(counter);

var buttonNumber1 = document.getElementById('button-1');
var buttonNumber2 = document.getElementById('button-2');
var buttonNumber3 = document.getElementById('button-3');

var product1Image = document.getElementById('img1');
var product2Image = document.getElementById('img2');
var product3Image = document.getElementById('img3');

Product.lastImgage = [];

function Product(src, name) {
  this.src = src;
  this.name = name;
  this.thimesDisplayed = 0;
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

Product.uniqueDouble = function () {
  var uniqueOptions = [];
  //math.random to generate random number
  //Account fot the array lenght (allProducts)
  while(uniqueOptions.length < 3){
    var ranNum = Math.floor(Math.random() * allProducts.length);
    //compare 2 previous with the new one
    //Includes gives me a boolean
    //!Whatever this evaluates, change it
    //compare the 2 numbers to each other
    //&& bot of those to be true
    if(!Product.lastImgage.includes(ranNum) && !uniqueOptions.includes(ranNum)) {
      uniqueOptions.push(ranNum);
    } else {
      console.log('Duplicate!');
    }
  }
  Product.lastImgage = uniqueOptions;
  return uniqueOptions;
};

Product.randomProduct = function () {

  var uniqueImages = Product.uniqueDouble();

  //Increment the number of times displayed
  Product.allProducts[uniqueImages[0]].timesDisplayed++;
  Product.allProducts[uniqueImages[1]].timesDisplayed++;
  Product.allProducts[uniqueImages[2]].timesDisplayed++;

  //So now that they are unique numbers, display 2 unique images

  Product.img1.src = Product.allProducts[uniqueImages[0]].src;
  Product.img1.alt = Product.allProducts[uniqueImages[0]].name;

  Product.img2.src = Product.allProducts[uniqueImages[0]].src;
  Product.img2.alt = Product.allProducts[uniqueImages[0]].name;

  Product.img3.src = Product.allProducts[uniqueImages[0]].src;
  Product.img3.alt = Product.allProducts[uniqueImages[0]].name;

  Product.img1.src = Product.allProducts[uniqueImages[1]].src;
  Product.img1.alt = Product.allProducts[uniqueImages[1]].name;

  Product.img2.src = Product.allProducts[uniqueImages[1]].src;
  Product.img2.alt = Product.allProducts[uniqueImages[1]].name;

  Product.img3.src = Product.allProducts[uniqueImages[1]].src;
  Product.img3.alt = Product.allProducts[uniqueImages[1]].name;

  Product.img1.src = Product.allProducts[uniqueImages[2]].src;
  Product.img1.alt = Product.allProducts[uniqueImages[2]].name;

  Product.img2.src = Product.allProducts[uniqueImages[2]].src;
  Product.img2.alt = Product.allProducts[uniqueImages[2]].name;

  Product.img3.src = Product.allProducts[uniqueImages[2]].src;
  Product.img3.alt = Product.allProducts[uniqueImages[2]].name;

};





//percentage

//Here I'm saying that these variables are these pictures.
var product1 = allProducts[0];
var product2 = allProducts[1];
var product3 = allProducts[2];

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


