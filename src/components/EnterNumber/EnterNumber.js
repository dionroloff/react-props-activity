import React, {Component} from 'react';

class EnterNumber extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            inputNumber: 0,
        }
    }

    handleChange = (event) => {
        this.setState({
            inputNumber: parseInt(event.target.value),
        });
    }

    handleUpClick = () => {
        this.props.updateTotal(this.state.inputNumber);
    }

    handleDownClick = () => {
        this.props.updateTotal(0 - this.state.inputNumber);
    }
    
    render() {
        console.log(this.state.inputNumber);
        return (
            <div>
                <h4>Enter a number and click up or down. The total will increase or decrease by that amount.</h4>
                <button onClick={this.handleUpClick}>Up</button>
                <input type="number" placeholder="Enter Number" onChange={this.handleChange}/>
                <button onClick={this.handleDownClick}>Down</button>  
            </div>
        )
    }
}

export default EnterNumber;