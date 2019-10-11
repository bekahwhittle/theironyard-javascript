var list = $('.toDoList');

// grab ToDo
function makeToDos (todo, i, arr){
  var taskId =  todo._id;
  var task = $('<li class="toDoItem">'+ todo.item + '</li>');
  var remove = $('<button class="delete" type="button" name="button">X</button>');
  // var complete = $('<button class="complete" type="button" name="button">✓</button>');
  task.append(remove);
  // task.append(complete);
  list.append(task);
  remove.on('click', function(){
    deleteToDo(todo);
  })
}
var jsonData = {
  type: 'GET',
  dataType: 'json',
  url: "http://tiny-za-server.herokuapp.com/collections/shimano"
}

// add new ToDo
function newToDo (addToDo) {
  var addedData = {
    type: 'POST',
    dataType: 'json',
    url: "http://tiny-za-server.herokuapp.com/collections/shimano",
    data: {
      item: addToDo,
    }
  }
  $.ajax(addedData).then(function (data, status, xhr){
    ajaxCall();
  })
}
$('.addItem').on('click', function(e) {
    var addToDo = $('.add').val();
    newToDo(addToDo);
});

// delete a ToDo
function deleteToDo (toDoItem) {
  var id = toDoItem._id;
  var url = 'http://tiny-za-server.herokuapp.com/collections/shimano/'+ id;
  var deleteData = {
    type: 'DELETE',
    url: url
  };
  $.ajax(deleteData).then(ajaxCall);
}

function ajaxCall () {
  $.ajax(jsonData).then(function (data, status, xhr){
    list.html('');
    data.forEach(makeToDos);
  });
}

// make ajaxCall
ajaxCall();
