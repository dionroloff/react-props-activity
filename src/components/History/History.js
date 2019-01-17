import React, {Component} from 'react';

class History extends Component {
    render() {
        //convert the objects to JSX
        let historyItems = [];

        for(let i = 0; i < this.props.history.length; i += 1) {
            let item = this.props.history[i];
            let itemRow = (<tr>
                               <td>
                                   {item.value}
                               </td>
                           </tr>);
                           
            historyItems.push(itemRow);
        }

        return (
            <div>
                <h3>History</h3>
                <table>
                    <tbody>
                        {historyItems}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default History;