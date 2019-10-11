  var inputs = [undefined, null, true, false, "", "1.2", "one", 0, -0, NaN, Infinity, -Infinity, 1, {}, [], [12], ['something'], function(){} ];
  var table = document.querySelector('.js-table');


// create.onclick = createTable;

// very forceful throughout and feels chuncky
// needs to be smaller for DRY practice
  // function createTable () {
  //   var table = document.querySelector('.js-table');
  //   for (var i = 0; i < inputs.length; i++) {
  //     var row = document.createElement('tr');
  //     var cell = document.createElement('td');
  //     var tn = document.createTextNode(inputs[i]);
  //     cell.appendChild(tn);
  //     row.appendChild(cell);
  //
  //     var cell = document.createElement('td');
  //     var tn = document.createTextNode(String(inputs[i]));
  //     cell.appendChild(tn);
  //     row.appendChild(cell);
  //
  //     var cell = document.createElement('td');
  //     var tn = document.createTextNode(Number(inputs[i]));
  //     cell.appendChild(tn);
  //     row.appendChild(cell);
  //
  //     var cell = document.createElement('td');
  //     var tn = document.createTextNode(Boolean(inputs[i]));
  //     cell.appendChild(tn);
  //     row.appendChild(cell);
  //
  //     table.appendChild(row);
  //
  //   }
  // }

// more concise - used array .map rule to iterate and recreate array
// calling innerHTML throughout and replacing value properties
// reminds me of methods and re-assigning values in Java
// function createTable () {
  var  createTable = inputs.map(function(value) {
    var row = document.createElement('tr');
    
    var original = document.createElement('td');
    original.innerHTML = value;
    row.appendChild(original);

    var stringVal = document.createElement('td');
    stringVal.innerHTML = String(value);
    row.appendChild(stringVal);

    var numberVal = document.createElement('td');
    numberVal.innerHTML = Number(value);
    row.appendChild(numberVal);

    var booleanVal = document.createElement('td');
    booleanVal.innerHTML = Boolean(value);
    row.appendChild(booleanVal);

    table.appendChild(row);

  });
// }
