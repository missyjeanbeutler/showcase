import React, { Component } from 'react';

class FilterString extends Component {
  constructor() {
    super()
    this.state = {
      unfilteredArray: ['Missy', 'Danny', 'Jessy', 'Sean', 'Kathy', 'Rusty', 'Chris', 'Aaron'],
      filteredArray: [],
      userInput: ''
    }
  }

  updateUserInput(val) {
    this.setState({
      userInput: val
    })
  }

  filterStringArray() {
    let filtered = []
    this.state.unfilteredArray.forEach(e => {
      if(e.toLowerCase().includes(this.state.userInput.toLowerCase())) filtered.push(e)
    });
    this.setState({
      filteredArray: filtered
    })
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter the Strings</h4>
        <span className="puzzleText">STRINGS: {JSON.stringify(this.state.unfilteredArray)}</span>
        <input className="inputLine" onChange={(e) => this.updateUserInput(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.filterStringArray()}>Filter</button>
        <span className="resultsBox filterStringRB">FILTERED: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterString;