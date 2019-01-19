import React, { Component } from 'react';

class Sum extends Component {
    constructor (props) {
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateNum1 (value){
        this.setState({
            number1: value
        })
    }

    updateNum2(value){
        this.setState({
            number2: value
        })
    }

    addNums(){
        const { number1, number2 } = this.state
        let total = parseFloat(number1) + parseFloat(number2);
        this.setState({
            sum: total
        })
    }

    render (){
        const { sum } = this.state;
        return <div className="puzzleBox sumPB" >
            <h4>Sum</h4>
            <input className="inputLine" onChange={event => this.updateNum1(event.target.value)} placeholder="First Number" />
            <input className="inputLine" onChange={event => this.updateNum2(event.target.value)} placeholder="Second Number" />
            <button className="confirmationButton" onClick={event => this.addNums()} >Run It</button>
            <span className="resultsBox" >The total is: {sum}</span>
        </div>
    }
}

export default Sum;