'use strict';
//Need counter que me ayudará con el 25 veces.
var counter = 0;
console.log(counter);

Product.productNames = [];
Product.productVotes = [];
Product.arrayOfColors = [];
Product.lastImgage = [];


var buttonNumber1 = document.getElementById('button-1');
var buttonNumber2 = document.getElementById('button-2');
var buttonNumber3 = document.getElementById('button-3');

var product1Image = document.getElementById('img1');
var product2Image = document.getElementById('img2');
var product3Image = document.getElementById('img3');


function Product(src, name) {
  this.src = src;
  this.name = name;
  this.timesDisplayed = 0;
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

var product1 = allProducts[0];
var product2 = allProducts[1];
var product3 = allProducts[2];

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
      console.log(uniqueOptions);
    } else {
      console.log('Duplicate!');
      console.log(uniqueOptions);
    }
  }
  Product.lastImgage = uniqueOptions;
  console.log(uniqueOptions);
  return uniqueOptions;
};



Product.handleClick = function(e) {

  Product.totalClicks++;

  console.log(event.target.alt);

  for(var i in Product.allProducts) {
    if(e.target.alt === Product.allProducts[i].name) {
      Product.allProducts[i].votes++;
      break;
    }
  }
};
Product.updateVotes = function() {
  for(var i in Product.allProducts){
    Product.productNames[i] = Product.allProducts[i].name;
    Product.productVotes[i] = Product.allProducts[i].votes;

    Product.arrayOfColors.push('#' + Math.floor(Math.random() * 16777215).toString(16));

  }
};

Product.renderChart = function () {
  var ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Product.productNames,
      datasets: [{
        label:'Votes per product',
        data: Product.productVotes,
        backgroundColor: Product.arrayOfColors,
        hoverBackgroundColor: 'yellow'
      }]
    },
    options: {
      scales:{
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      title: {
        display: true,
        text:'Results'
      }
    }
  });
};
console.log('chart');

//percentage

//Here I'm saying that these variables are these pictures.


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
    Product.renderChart();
  }

}


function changeImage() {

  var uniqueImages = Product.uniqueDouble();

  // product1 = uniqueImages [0];
  // product2 = uniqueImages [1];
  // product3 = uniqueImages [2];



  // product1 = allProducts[Math.floor(Math.random() * allProducts.length)];
  product1 = allProducts[uniqueImages[0]];
  product1Image.src = product1.src;
  // product2 = allProducts[Math.floor(Math.random() * allProducts.length)];
  product2 = allProducts[uniqueImages[1]];
  product2Image.src = product2.src;
  // product3 = allProducts[Math.floor(Math.random() * allProducts.length)];
  product3 = allProducts[uniqueImages[2]];
  product3Image.src = product3.src;



  allProducts[uniqueImages[0]].timesDisplayed++;
  allProducts[uniqueImages[1]].timesDisplayed++;
  allProducts[uniqueImages[2]].timesDisplayed++;



  Product.src = allProducts[uniqueImages[0]].src;
  Product.img1.alt = allProducts[uniqueImages[0]].name;

  Product.src = allProducts[uniqueImages[0]].src;
  Product.img2.alt = allProducts[uniqueImages[0]].name;

  Product.src = allProducts[uniqueImages[0]].src;
  Product.img3.alt = allProducts[uniqueImages[0]].name;

  Product.src = allProducts[uniqueImages[1]].src;
  Product.img1.alt = allProducts[uniqueImages[1]].name;

  Product.src = allProducts[uniqueImages[1]].src;
  Product.img2.alt = allProducts[uniqueImages[1]].name;

  Product.src = allProducts[uniqueImages[1]].src;
  Product.img3.alt = allProducts[uniqueImages[1]].name;

  Product.src = allProducts[uniqueImages[2]].src;
  Product.img1.alt = allProducts[uniqueImages[2]].name;

  Product.src = allProducts[uniqueImages[2]].src;
  Product.img2.alt = allProducts[uniqueImages[2]].name;

  Product.src = allProducts[uniqueImages[2]].src;
  Product.img3.alt = allProducts[uniqueImages[2]].name;


}

changeImage();








