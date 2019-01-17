import React, {Component} from 'react';

class CurrentTotal extends Component {

    handleSave = () => {
        const itemToAdd = {
            value: this.props.currentTotal,
        };

        this.props.addToHistory(itemToAdd);
    }

    render() {
        return (
            <div>
                <h3>Current Total</h3>
                <h2>{this.props.currentTotal}</h2>
                <button type="submit" onClick={this.handleSave}>Save</button>
            </div>
        )
    }
}

export default CurrentTotal;