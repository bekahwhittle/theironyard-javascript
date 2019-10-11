import React from 'react'
import { Link } from 'react-router-dom'
import Questions from '../components/questions.js'
import { connect } from 'react-redux'
import container from '../containers/all.js'


class Results extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <section>
      <h2 className="question-header">Results Page</h2>
          {this.props.results.map((answer, i) => {
            return (
              <ul>
                <li className="results">{answer}</li>
              </ul>
            );
          })}
     </section>
    );
  }
}

export default connect(container.allState)(Results);
