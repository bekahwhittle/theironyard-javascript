import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import getCategory from '../actions/create_category.js'
import Question from './question.js'


class Categories extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      reveal: false
    };
  }

  componentDidMount() {
    this.props.dispatch(getCategory());
  }


  render () {
    return (
      <main>
      <h1 className="title">REACTOPARDY</h1>
      <div className="flex-container">
      {this.props.categories.map((category, i) => {
        return (
          <div className="categoryH3 " key={i}>{category.categoryTitle}
          {category.clues.map((clue, j) => {
            return (<Question key={j} clue={clue}/>);
          })}
          </div>
          )
      })}
      </div>
      <h5 className="total score">TOTAL: {this.props.total}</h5>
      </main>
    )
  }


}

export default connect(container.allState) (Categories);
