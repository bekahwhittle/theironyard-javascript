import { render } from 'react-dom'
import React from 'react'
import AppRoot from './views/app_root.js'

export default function app() {

 const Content = React.createClass({

   render: function (){
     return (
       <div>
        <h1 className="blogName">BEKAH BABBLES</h1>
        <Post />

         <BlogPost
         title="Love"
         body=
         "Some people care too much. I think it's called love."
          date="April 10, 2017"
          />

        <BlogPost
        title="Together"
        body=
        "I think we dream so we don’t have to be apart for so long. If we’re in each other’s dreams, we can be together all the time."
        date="April 6, 2017"
        />

        <BlogPost
        title="Patience"
        body="Rivers know this: there is no hurry. We shall get there some day"
        date="April 4, 2017"
        />

        <BlogPost
        title="Balloons"
        body="Nobody can be uncheered with a balloon"
        date="April 1, 2017"
        />

        <BlogPost
        title="Adventure"
        body="When you see someone putting on his Big Boots, you can be pretty sure that an Adventure is going to happen."
        date="March 29, 2017"
        />

       </div>
     );
   }
 });

 const BlogPost = React.createClass({

   getInitialState: function () {
     return {
       hidden: false
     };
   },

   hideContent: function () {
     this.setState({
       hidden: !this.state.hidden
     });
   },

   render: function () {
     var bodyToggle = "display-body";
     if(this.state.hidden) {
       bodyToggle = "hide-body";
     }

     return (
       <div className="form-container">
         <div className="form">
          <h3 className="blogTitle">{this.props.title}</h3>
          <button id="hideBtn" onClick={this.hideContent}>Hide</button>
          <p id="blogBody" className={bodyToggle}>{this.props.body}</p>
          <h6 className="blogDate">{this.props.date}</h6>
         </div>
       </div>
     );
   }
 });

 const Post = React.createClass({
   render: function () {
     return (
       <div className="inputArea">
       <input id="titleInput" type="text" name="" value="" placeholder="title" />
       <input id="titleInput" className="textArea" type="text" name="body" placeholder="body"></input>
       </div>
     )
   }
 });

 const NavBar = React.createClass({
   render: function () {
     return (
       <nav>
         <h5>Blog</h5>
         <h5>About</h5>
         <h5>Contact</h5>
       </nav>
     )
   }
 })


 const App = React.createClass({
   render: function (){
     return (
       <main>
       <Content />
       </main>
     );
   }
 });


  render(<App />, document.querySelector('#app'));
}
