import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor(props){
        super(props)
        this.state = {
            evenArray: [],
            oddArrary: [],
            userInput: ""
        }
    }

    updateUserInput (value){
        this.setState({
            userInput: value
        })
    }

    solvedEvenAndOdd (){
        const { userInput } = this.state;
        let evenArray2 = [];
        let oddArray2 = [];
        let inputCopy = userInput.split('').map(x => parseFloat(x));
        for( let i = 0; i < inputCopy.length; i++){
            if (inputCopy[i] % 2 === 0) { 
                evenArray2.push(inputCopy[i]) 
            } else { oddArray2.push(inputCopy[i]) 
            }
        }
        this.setState({
            evenArray: evenArray2,
            oddArray: oddArray2,
            userInput: ""
        })
    }


    render (){

        const { evenArray, oddArray, userInput } = this.state;    
        return <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input value={userInput} onChange={event => this.updateUserInput(event.target.value)} className="inputLine" placeholder="Type in Numbers"/>
            <button onClick={e => this.solvedEvenAndOdd()} className="confirmationButton">Run it</button>
            <span className="resultsBox">Evens: {evenArray}</span>
            <span className="resultsBox">Odds: {oddArray}</span>
        </div>
    }
}

export default EvenAndOdd;