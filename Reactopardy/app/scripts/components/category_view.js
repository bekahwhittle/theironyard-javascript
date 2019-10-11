import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import Question from '../components/question.js'
import getCategory from '../actions/create_category.js'

class CategoryView extends React.Component {

  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.dispatch(getCategory());
  }

  render () {
    return (
      <section>
        <h1 className="title">REACTOPARDY</h1>
        <ul className="question-container">
          {this.props.questions.map((question) => {
            return <Question key={question.id} question={question} />
          })}
        </ul>
        <h5 className="total score">TOTAL: {this.props.total}</h5>
      </section>
    );
  }
}

export default connect(container.allState)(CategoryView);
