import React, { Component } from 'react';
import {connect} from 'react-redux';

class History extends Component {
    render() {
        const myHistory = this.props.history.map((item, i) => <li key={item+i}>{item}</li>)
        return (
            <div className='historyContainer'> 
                <ul>{myHistory}</ul>
            </div>
        );
    }
}

export default connect(state => state, {})(History);