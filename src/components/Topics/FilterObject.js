import React, { Component } from 'react';

class FilterObject extends Component {
  constructor() {
    super()
    this.state = {
      unfilteredArray: [
        {
          name: 'Missy',
          age: '28',
          gender: 'female'
        },
        {
          name: 'Danny',
          age: '34',
          gender: 'male',
          occupation: 'Networker'
        },
        {
          name: 'Sophie',
          gender: 'female',
          type: 'dog'
        }
      ],
      userInput: '',
      filteredArray: []
    }
  }

  updateUserInput(val) {
    this.setState({
      userInput: val
    })
  }

  filterTheObject() {
    let filtered = []
    this.state.unfilteredArray.forEach(e => {
      if(e[this.state.userInput]) filtered.push(e)
    })
    this.setState({
      filteredArray: filtered
    })
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object Properties</h4>
        <span className="puzzleText"><pre>ORIGINAL: {JSON.stringify(this.state.unfilteredArray, null, 2)}</pre></span>
        <input className="inputLine" onChange={(e) => this.updateUserInput(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.filterTheObject()}>Filter</button>
        <span className="resultsBox filterObjectRB"><pre>FILTERED: {JSON.stringify(this.state.filteredArray, null, 2)}</pre></span>
      </div>
    )
  }
}

export default FilterObject;