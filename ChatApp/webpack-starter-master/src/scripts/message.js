Message.prototype.delete = function (message) {
  console.log("hi");
  let id = message._id;
  console.log(id);
  let url = "http://tiny-za-server.herokuapp.com/collections/chitter" + id;
  let jsonData = {
    type: 'DELETE',
    url: url
  }
  $.ajax(jsonData);
}

Message.prototype.create = function () {
  console.log(this);
  let jsonData = {
    data: JSON.stringify({
      message: this.message,
      timestamp: this.timestamp,
      sender: this.sender
    }),
    type: 'POST',
    contentType: 'application/json',
    url: "http://tiny-za-server.herokuapp.com/collections/chitter"
  }
  $.ajax(jsonData);
}

export default function Message (message, timestamp, sender) {
  this.message = message;
  this.timestamp = timestamp;
  this.sender = sender;
}
