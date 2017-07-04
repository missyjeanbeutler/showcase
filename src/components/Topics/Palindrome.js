import React, { Component } from 'react';

class Palindrome extends Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      palindrome: 'wait for it... '
    }
  }

  updateUserInput(val) {
    this.setState({
      userInput: val
    })
  }

  isIt() {
    let test = this.state.userInput.split('').reverse().join('')
    this.setState({
      palindrome: test === this.state.userInput ? 'true' : 'false'
    })
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={(e) => this.updateUserInput(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.isIt()}>Test it!</button>
        <span className="resultsBox">Is it a palindrome? {this.state.palindrome}</span>
      </div>
    )
  }
}

export default Palindrome;