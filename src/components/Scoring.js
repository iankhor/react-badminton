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

const labels = {
    opponentOne: "Opponent 1",
    opponentTwo: "Opponent 2",
}

class Scoring extends Component {
    constructor() {
        super()
        
        this._AddScore = this._AddScore.bind(this)

        this.state = {
            opponentOne: 0,
            opponentTwo: 0,
        }
    }



    _AddScore(e){
        switch (e.target.innerHTML) {
            case labels.opponentOne:
                console.log('op 1')
                break
            case labels.opponentTwo:
                console.log('op 2')
                break
            default:
                console.log('error')
        }
            

        // console.log(e.target.innerHTML)
        // this.setState({
        //     opponentOne: this.state.opponentOne + 1,
        // })

    }

    render(){
        return(
            <App>
                <FlatButton 
                    label={labels.opponentOne}
                    style={labelStyle.scoring} 
                    name="Op-one"
                    onClick={(e) => this._AddScore(e)}
                />
                <FlatButton 
                    label={labels.opponentTwo}
                    style={labelStyle.scoring} 
                    name="Op-two"
                    onClick={(e) => this._AddScore(e)}
                />

                <br/>
                {this.state.opponentOne + ' : ' + this.state.opponentTwo}
            </App> 
        )
    }
}

export default Scoring

