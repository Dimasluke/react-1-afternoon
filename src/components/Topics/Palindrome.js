import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: "",
            palindrome: ""
        }
    }

    palindromeCheck(){
        const { userInput } = this.state;
        let reversedInput = userInput.split("").reverse().join("");
        let checker = false;
        userInput === reversedInput ? checker = true : false
        this.setState({
            userInput: "",
            palindrome: checker
        })
    }

    updateUserInput(value){
        this.setState({
            userInput: value
        })
    }

    render (){
        const { userInput, palindrome } = this.state;
        return <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={event => this.updateUserInput(event.target.value)} placeholder="Type a Word here" />
            <button className="confirmationButton" onClick={event => this.palindromeCheck()}>Run It</button>
            <span className="resultsBox" >Palindrom: { JSON.stringify(palindrome, null, 10) }</span>
        </div>
    }
}

export default Palindrome;