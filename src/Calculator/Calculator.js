import React, { Component } from 'react';
import ResultComponent from './ResultComponent';
import KeyPadComponent from "./KeyPadComponent";

class Calculator extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }
    onClick = button => {

        if(button === "="){
            this.calculate()
        }
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    calculate = () => {
         this.setState({
                result: (eval(this.state.result) || "" ) + ""
            })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default Calculator;