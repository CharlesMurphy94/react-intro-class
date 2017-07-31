import React, {Component} from 'react';
import calculatorImg from "./calculator.png"

class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            headerText: "My Calculator",
            operator: "",
            display: "0",
            tempNum: 0,
            resetDisplay: false
        }
        
    }
    inputTextChanged(event){
        //Remember the new value
        this.setState({
            headerText: event.target.value
        })
    }   
    numberClicked(num) {
        var display = ( this.state.display === '0' ) ? num : this.state.display + num; 
        
        this.setState({
            display:  (this.state.display.length < 13) ? display : this.state.display
        })
    }
    setOperator(operator){
        if (!this.state.operator){
            this.setState({operator: operator,
            tempNum: parseInt(this.state.display,10),
            display: "0"
            });
        }
    }
    calculate(){ 
        if (!this.state.operator){
            return;
        }
        var result;
        switch (this.state.operator){
            case "-": 
                result = this.state.tempNum - parseInt(this.state.display, 10);
                break;
            case "+": 
                result = this.state.tempNum + parseInt(this.state.display, 10);
                break;
            case "*": 
                result = this.state.tempNum * parseInt(this.state.display, 10);
                break;
            case "/":
                result = this.state.tempNum / parseInt(this.state.display, 10);
                break;
            default:
                break;
        }
        this.setState({display: String(result)});
    } 
    clearDisplay(){
        this.setState({operator: "",
                        display: "0",
                        tempNum: 0,
                        resetDisplay: false
                    })
    }
    render () {
        return (
            <div id="calculator-container">
                <input id="header-input" onChange={ (e)=>this.inputTextChanged(e) } />
                <h1 id="header"> { this.state.headerText } </h1>
                <img className="remove-highlight" src={calculatorImg} alt="calculator" />
                <div id="calculator-mask" className="remove-highlight">
                <div className="output">
                    <span className="total"> { this.state.display }</span>
                </div>

                <div className="btn clear" onClick={ () => {this.clearDisplay()} }></div>

                <div className="btn zero" onClick={ () => {this.numberClicked('0')} }></div>
                <div className="btn one" onClick={ () => {this.numberClicked('1')} }></div>
                <div className="btn one" onClick={ () => {this.numberClicked('1')} }></div>
                <div className="btn two" onClick={ () => {this.numberClicked('2')} }></div>
                <div className="btn three" onClick={ () => {this.numberClicked('3')} }></div>
                <div className="btn four" onClick={ () => {this.numberClicked('4')} }></div>
                <div className="btn five" onClick={ () => {this.numberClicked('5')} }></div>
                <div className="btn six" onClick={ () => {this.numberClicked('6')} }></div>
                <div className="btn seven" onClick={ () => {this.numberClicked('7')} }></div>
                <div className="btn eight" onClick={ () => {this.numberClicked('8')} }></div>
                <div className="btn nine" onClick={ () => {this.numberClicked('9')} }></div>

                <div className="btn equal" onClick={ () => {this.calculate()} }></div>
                <div className="btn multiply" onClick={ () => {this.setOperator('*')} }></div>
                <div className="btn divide" onClick={ () => {this.setOperator('/')} }></div>
                <div className="btn subtract" onClick={ () => {this.setOperator('-')} }></div>
                <div className="btn add" onClick={ () => {this.setOperator('+')} }></div>
                </div>
            </div>
        )
    }

}
export default Calculator;