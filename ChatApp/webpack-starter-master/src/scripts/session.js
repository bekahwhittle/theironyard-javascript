Session.prototype.create = function () {
  console.log(this);
  let jsonData = {
    data: JSON.stringify({
      username: this.username,
    }),
    type: 'POST',
    contentType: 'application/json',
    url: "http://tiny-za-server.herokuapp.com/collections/chitter"
  }
  $.ajax(jsonData);
}

export default function Session (username) {
  'use strict';
  this.username = username;
}
