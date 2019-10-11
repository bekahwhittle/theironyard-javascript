var answerArea = document.getElementsByClassName('.answr');

console.log(items);

// #1 Show me how to calculate the average price of all items.

function medianPrice() {
  var allPrices = 0;
  items.forEach(function(item, index, array) {
    allPrices += item.price;
    console.log(allPrices);
  });

  return Math.round((allPrices / items.length) * 100) / 100;
}
document.querySelector('.one').innerHTML = 'The average price is ' + medianPrice() + '!';

// #2 Show me how to get an array of items that cost between $14.00 and $18.00 USD


var filteredPrices = items.filter(function (element, index, array) {
    return element.price > 14.00 && element.price < 18.00;
});

var titles = filteredPrices.map(function(item, index, array) {
  return '<li>' + item.title + '</li>';
});

titles.forEach(function(item, index, array) {
  var output = document.querySelector('.two');
  output.innerHTML += item;
});


// #3 Which item has a "GBP" currency code? Display it's name and price

var currencyCode = items.filter(function (element, index, array) {
    return element.currency_code === 'GBP';
});

var pound = currencyCode.map(function(item, index, array) {
  return item.title  + 'costs ' + '&#163;' + item.price;
});

pound.forEach(function(item, index, array) {
  var output = document.querySelector('.three');
  output.innerHTML += item;
});

// #4 Display a list of all items who are made of wood

var wood = items.filter(function (element, index, array) {
    return element.materials.some(function(element, index, array) {
      return element === 'wood';
    });
});

var isWood = wood.map(function(item, index, array) {
  return '<li>' + item.title + ' is made of wood.</li>';
});

isWood.forEach(function(item, index, array) {
  var output = document.querySelector('.four');
  output.innerHTML += item;
});

// #5 Which items are made of eight or more materials? Display the name, number of items and the items it is made of

var plusMaterials = items.filter(function (element, index, array) {
  return element.materials.length >= 8;
});

var many = plusMaterials.forEach(function(item, index, array) {
  var output = document.querySelector('.five');
  output.innerHTML += '<li>' + item.title + ' has ' + item.materials.length + ' materials:';
  item.materials.forEach(function(current, index, array) {
    output.innerHTML += '<li>'  +  current + '</li>';
  });
});

// #6 How many items were made by their sellers

var builtSellers = items.filter(function (element, index, array) {
    return element.who_made === 'i_did';
});
var output = document.querySelector('.six');
output.innerHTML += builtSellers.length + ' were made by their sellers';
