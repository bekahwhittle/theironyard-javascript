var submit = document.getElementById('submit');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var email = document.getElementById('email');
var country = document.getElementById('country');
var glad = document.getElementById('glad');
var phone = document.getElementById('phone');
var alias = document.getElementById('alias');
var occupation = document.getElementById('occupation');
var gadget = document.getElementById('gadget');
var gladiator = {}

submit.addEventListener('click', function(){
  getFirstName();
  getLastName();
  getEmail();
  getCountry();
  getGlad();
  getPhone();
  getOccupation();
  favGadget();
  getAlias();
  console.log(gladiator);
})

function getFirstName() {
  if (firstName.length <= 1) {
    alert("NOPE");
  } else {
    gladiator.firstName = firstName.value;
  }
};
function getLastName() {
  if (lastName.length <= 1) {
    alert("NOPE");
  } else {
    gladiator.lastName = lastName.value;
  }
};
function getEmail (){
  if(email.value.includes("@")){
    if(email.value.includes(".com")){
      gladiator.email = email.value;
    }
  } else {
    alert("nope");
  }
};
function getCountry(){
  gladiator.country = country.value;
};
function getGlad(){
  if(glad.value.length < 20){
    alert("glad is too short")
  } else {
    gladiator.glad = glad.value;
  }
};
function getPhone (){
  if (phone.value.length < 13){
    alert("NOT REAL!!");
  } else {
    gladiator.phoneNumber = phone.value;
  }
};
function getOccupation(){
  gladiator.occupation = occupation.value;
};
function favGadget(){
  if (gadget.value.length < 1){
    alert("please input your favorite gadget")
  } else {
    gladiator.gadget = gadget.value;
  }
};
function getAlias(){
  if(alias.value.length < 1){
    alert("please fill in the blanks")
  } else {
    gladiator.alias = alias.value;
  }
};
