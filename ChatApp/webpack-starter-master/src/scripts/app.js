import Session from "./session.js";
import Message from "./message.js";
import addMessage from "./session.js";
import View from "./view.js";

export default function app() {

	$(document).ready(function() {
	    console.log( "___HELLO__!" );
			// let newLogin = new LoginView();
			// newLogin.loginRender();
	});
	$('#login').on('click', function(e) {
			let username = $('.username').val();
			let user = new Session(username);
			console.log(user);
			$('.messaging-section').removeClass('hidden');
			user.create();
	});
	$('.addMessage').on('click', function(e) {
	    let newMessage = $('#message').val();
			let timestamp = "03/28/17";
			let sender = "matt";
			let message = new Message(newMessage, timestamp, sender);
			console.log(message);
			message.create();
	});
}

var allMessages = $('_messages');
function writeMessages (getMessage, i, arr){
  let messagesID =  message._id;
  let thisMessage = $(`<li class="newMessage">$(getMessage.message)</li>`);
  let remove = $(`<button class="delete" type="button" name="button">X</button>`);
  thisMessage.append(remove);
  allMessages.append(thisMessage);
	console.log(thisMessage);
}
let jsonData = {
  type: 'GET',
  dataType: 'json',
  url: "http://tiny-za-server.herokuapp.com/collections/chitter"
}
function ajaxCall () {
  $.ajax(jsonData).then(function (data, status, xhr){
    list.html('');
    data.forEach(writeMessages);
  });
}
ajaxCall();

// session should be a variable used later 
