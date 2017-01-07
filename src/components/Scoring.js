import React, { Component } from 'react'
import App from './App'

//material-ui components
import { TextField,
         FlatButton } from 'material-ui/';

const labelStyle = {
    scoring: {
        color: 'black',
        border: '2px solid white'
    }
}

class Scoring extends Component {
    constructor() {
        super()
    }

    state = {
        opponentOne: 0,
        opponentTwo: 0,
    }

    render(){
        return(
            <App>
                <FlatButton label="Opponent 1" style={labelStyle.scoring}/>
                <FlatButton label="Opponent 2" style={labelStyle.scoring}/>
                <br />
                {this.state.opponentOne + ' : ' + this.state.opponentTwo}
            </App> 
        )
    }
}

export default Scoring

