import React, { Component } from 'react';

class EvenAndOdd extends Component {
  constructor() {
    super()
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  updateUser(newVal) {
    console.log(newVal)
    this.setState({
      userInput: newVal
    })
  }

  updateArrays() {
    let evens = []
    let odds = []
    this.state.userInput.split(',').forEach((e) => {
      +e % 2 !== 0 ? odds.push(+e) : evens.push(+e)
      console.log(+e, evens, odds)
    })
    this.setState({
      evenArray: evens,
      oddArray: odds
    })
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Even and Odds</h4>
        <input className="inputLine" onChange={(e) => this.updateUser(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.updateArrays()}>Calculate</button>
        <span className="resultsBox">Even: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odd: {JSON.stringify(this.state.oddArray)}</span>        
      </div>
    )
  }
}

export default EvenAndOdd;