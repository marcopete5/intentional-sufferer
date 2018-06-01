import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOption } from './Redux/options';
import { addToHistory } from './Redux/history';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            selected: 'Spin the Wheel',
            input: '',
            adding: false,
        }
    }

    spinWheel = () => {
        let { history, options } = this.props;
        let random = options[Math.floor(Math.random() * options.length)]
        let len = history.length < 3 ? 3 : history.length;
        while (random === history[len - 3] || random === history[len - 2] || random === history[len - 1]) {
            console.log('copy found')
            random = options[Math.floor(Math.random() * options.length)]
        }
        this.setState({ selected: random }, () => {
            console.log(this.state);
            if (this.state.selected !== 'Spin the Wheel') {
                this.props.addToHistory(this.state.selected)
            }
        })
    }

    addSuck = () => {
        this.props.addOption(this.state.input)
        this.setState({ adding: !this.state.adding })
    }

    openForm = () => {
        this.setState({ adding: !this.state.adding })
    }

    handleChange = e => {
        this.setState({ input: e.target.value })
    }

    render() {
        return (
            <div className='homeContainer'>
                <div className="spin">
                    <h1>{this.state.selected}</h1>
                    <button onClick={this.spinWheel}>SPIN</button>
                </div>

                {
                    !this.state.adding ?
                        <div className="addNewTitle">
                            <h1>Add Sucky Idea</h1>
                            <button onClick={this.openForm}>ADD</button>
                        </div>
                        :
                        <div className="addNew">
                            <input type="text" value={this.state.input} onChange={this.handleChange} />
                            <button onClick={this.addSuck}>ADD</button>
                        </div>
                }
            </div>
        );
    }
}


export default connect(state => state, { addOption, addToHistory })(Home);