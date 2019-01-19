import React, { Component } from 'react';

class FilterObject extends Component {
    constructor (props){
        super(props);
        this.state = {
            unFilteredArray: [
                { name: "The Flash",
                  superpower: "speed",} , 
                { name: "Superman",
                  identity: "Clark Kent"} , 
                { name: "Batman",
                  superpower: "Intellect & Martial Arts",
                  identity: "Bruce Wayne"}],
            userInput: "",
            filteredArray: []
        }
    }

    updateUserInput (value){
        this.setState({
            userInput: value
        })
    }

    propertyCheck (){
        const { unFilteredArray, userInput, filteredArray } = this.state;
        let arrayCopy = unFilteredArray.filter(x => {
            for ( var props in x){
                if ( userInput === props){
                    return true;
                }
            }
        })
        this.setState({
            filteredArray: arrayCopy,
            userInput: ""
        })
    }

    render (){
        const { unFilteredArray, userInput, filteredArray } = this.state;
        return <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Original: { JSON.stringify(unFilteredArray, null, 10) }</span>
            <input className="inputLine" onChange={e => this.updateUserInput(e.target.value)} placeholder="Type in Property name"/>
            <button className="confirmationButton" onClick={e => this.propertyCheck()}>Run It</button>
            <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(filteredArray, null, 10) }</span>
        </div>
    }
}

export default FilterObject;