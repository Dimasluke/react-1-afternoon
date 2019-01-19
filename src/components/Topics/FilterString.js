import React, { Component } from 'react';

class FilterString extends Component {
    constructor (props){
        super(props);
        this.state = {
            unFilteredArray: ["one", "two", "one", "three", "three"],
            userInput: "",
            filteredArray: []
        }
    }

    arrayCheck(){
        const { unFilteredArray, userInput } = this.state;
        let checkArray = unFilteredArray.filter(x => x === userInput)
        this.setState({
            userInput: "",
            filteredArray: checkArray
        })
    }

    updateUserInput (value){
        this.setState({
            userInput: value
        })
    }

    render (){
        const { unFilteredArray, filteredArray } = this.state
        return <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">{ JSON.stringify(unFilteredArray, null, 10) }</span>
            <input className="inputLine" onChange={event => this.updateUserInput(event.target.value)} placeholder="Type a word in the Array above" />
            <button className="confirmationButton" onClick={ event => this.arrayCheck()}>Run It</button>
            <span className="resultsBox filterStringRB" >Filtered Words: { JSON.stringify(filteredArray, null, 10) }</span>
        </div>
    }
}

export default FilterString;