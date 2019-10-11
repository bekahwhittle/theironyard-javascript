# Document Reader

A simple document reader that utilizes React and state logic.

### Expectations
* Using a fresh clone of the webpack-starter
* Create a document reader app, that allows users to read a document and mark that document as read.
* Use a checkbox to allow a user to mark a document as read
* When the user checks the checkbox, it should become checked AND they should be prompted to confirm whether they truly read the document (perhaps with a modal)
* If they confirm, the box should remain checked AND become disabled.
* If they cancel, the box should go back to being unchecked.
* This app should be using multiple react components.

### Planning

* Questions
  * How will I set the state and reset the state?
  * How will I lock the checkbox?
* Polish
* Single page application

### Challenges

* Boolean logic
    * Realizing that once the user has 'checked' the box they have set the state to true
      * I 'reset' the state multiple times to undo the previous set
* React has odd state protocol that makes the new state not render until it's all the way through  
  * Realized this through  `console.log()`  
    * Moved syntax around to fix the issue

### Use

> [Experience it live!](http://teambekbek-document-reader.surge.sh/)     
