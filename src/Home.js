import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOption } from './Redux/options';
import { addToHistory } from './Redux/history';
import PieChart from 'react-svg-piechart';
import axios from 'axios';


class Home extends Component {
    constructor() {
        super();

        this.state = {
            selected: '',
            input: '',
            adding: false,
            deg: 0,
            data: [
                { title: "Data 1", value: 30, color: "black" },
                { title: "Data 2", value: 30, color: "#f5f5f8a6" },
                { title: "Data 3", value: 30, color: "black" },
                { title: "Data 4", value: 30, color: "#f5f5f8a6" },
                { title: "Data 5", value: 30, color: "black" },
                { title: "Data 5", value: 30, color: "#f5f5f8a6" },
                { title: "Data 5", value: 30, color: "black" },
                { title: "Data 5", value: 30, color: "#f5f5f8a6" },
                { title: "Data 5", value: 30, color: "black" },
                { title: "Data 5", value: 30, color: "#f5f5f8a6" }
            ]
        }
    }

    // componentWillMount = () => {
    //     const data = this.state.data;
    //     for(var i = 0; i < data.length; i++){
    //         (function(x){
    //             axios.get('http://www.colr.org/json/color/random').then(response => {
    //                 data[x].color = '#' + response.data.new_color;
    //                 this.setState({data});
    //             }).catch((error) => {
    //                 console.log(error);
    //             });
    //         })(i)
    //     }
    // }
        

    

    spinWheel = () => {
        let { history, options } = this.props;
        let random = options[Math.floor(Math.random() * options.length)]
        let len = history.length < 3 ? 3 : history.length;
        while (random === history[len - 3] || random === history[len - 2] || random === history[len - 1]) {
            console.log('copy found')
            random = options[Math.floor(Math.random() * options.length)]
        }
        this.setState(prevState => { 
            return { 
                selected: '',
                deg: prevState.deg + Math.floor(Math.random()* 360)+720
            }}, () => {
            setTimeout(()=>{
                this.setState({selected: random})
                if (this.state.selected !== 'Spin the Wheel' && this.state.selected !== '') {
                    this.props.addToHistory(this.state.selected)
                }
            },3010)
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
                    <button onClick={this.spinWheel} id='spinBtn'>SPIN</button>
                    <h1>{this.state.selected}</h1>
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
                <img className='spinArrow' src="https://image.flaticon.com/icons/svg/53/53677.svg" alt=""/>
                <div className='pieDiv' style={{ transform: `rotate(${this.state.deg}deg)` }}>
                    <PieChart
                        data={this.state.data}
                        expandOnHover
                    />
                </div>

            </div>

        );
    }
}


export default connect(state => state, { addOption, addToHistory })(Home);