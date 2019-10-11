// #1

function playingCard (suit, value) {
  'use strict';
  this.suit = suit;
  this.value = value;
  return this;
}

var diamond2 = new playingCard('diamonds', 2);


// #2

function Dice () {
  'use strict';
  this.roll = function() {
    this.side = Math.floor(Math.random() * 6 + 1);
    return this.side;
  }
}

var die1 = new Dice();
var die2 = new Dice();

// #3

function getProbabilities (die1, die2) {
  var rolls = [];

  for (var i = 0; i < 1000; i++) {
    var firstRoll = die1.roll();
    var secondRoll = die2.roll();
    var total = firstRoll + secondRoll;
    rolls.push(total);
  }
  console.log(rolls);

  var tally = [];
  rolls.forEach(function (roll, i, arr){
    if(tally[roll]) {
      tally[roll] = tally[roll] + 1;
    }
    else {
      tally[roll] = 1;
    }
  })
  console.log(tally);
  return tally;
}

getProbabilities(die1, die2)
