import React, { Component } from 'react';

class Sum extends Component {
  constructor() {
    super()
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  updateNumbers(val, num) {
    if(num === 1) {
      this.setState({
        number1: val
      })
    } else {
      this.setState({
        number2: val
      })
    }
  }

  sum() {
    this.setState({
      sum: +this.state.number1 + +this.state.number2
    })
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Add the Numbers!</h4>
        <input className="inputLine" onChange={(e) => this.updateNumbers(e.target.value, 1)}/>
        <input className="inputLine" onChange={(e) => this.updateNumbers(e.target.value, 2)}/>
        <button className="confirmationButton" onClick={() => this.sum()}>Calculate!</button>
        <span className="resultsBox">TOTAL: {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum;