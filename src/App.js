import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import EnterNumber from './components/EnterNumber/EnterNumber.js';
import CurrentTotal from './components/CurrentTotal/CurrentTotal';
import History from './components/History/History.js';
import './App.css';
import './components/CurrentTotal/CurrentTotal.css';
import './components/History/History.css';

class App extends Component {

  constructor() {
    super(); 
      this.state = {
        total: 0,
        history: [],
      }
  }

  updateTotal = (inputNumber) => {
    console.log('updating total with', inputNumber);
    this.setState({
      total: this.state.total + inputNumber,
    });
  }

  addToHistory = (itemToAdd) => {
    this.setState({
      history: [...this.state.history, itemToAdd],
    })
  }
  
  render() {
    return (
      <div className="App">
        
        <div className="App-header">
            <header>
                <Header />
            </header>
        </div>
        
        <div className="enter-number">
            <EnterNumber updateTotal={this.updateTotal} />
        </div>
        
        <div className="current-total">
            <CurrentTotal currentTotal={this.state.total} 
                          addToHistory={this.addToHistory} />
        </div>
        
        <div className="history">
            <History history={this.state.history} />
        </div>
        
      </div>
    );
  }
}

export default App;
