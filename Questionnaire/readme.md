# Questionnaire

A multipage survey application with react-router and redux

### Planning
- [x] Create Start Page
  * Start Page:
    * 'Welcome! We have 10 questions for you - click start to begin!'
      * Navigate with question links on the side
- [x] Create Question Page
  * Question Page:
      * Question then input field with two button on the bottom
      * Next button & previous button
- [ ] Create Results Page      
  * Results Page:
      * Display all questions with their answers
          * If they didn't answer it should be empty and possibly red

### Expectations

* Using React components, created a Start page, a Question page and a Results page. There is a minimum of 10 questions, hard coded into the application.
* Start page welcomes the user, tells them how many questions there are as well as link to each question, there should also be a 'start' button on the page that takes them to question one.
* Question page includes the question being asked an input field for writing in your answer, a previous question button, and a next button.
* The Results page should show the user all of the questions and their answers in a tabular format. If they got to the results page without answering a question it should be highlighted in css.
* The app should be fully styled.
* Your app will have at least the following Routes:
  * `/`
  * `/start`
  * `/question/1`
  * `/question/2`
  * `#...`
  * `/results`


### Challenges

* Utilizing a filter for the questions.
* Correlating `:id` to each index in the array.
* Routing the results page.

### Use
> [Experience it live!](http://teambekbek-questionnaire.surge.sh/)
