import './player.css';
import Home from './home.js';
import React from 'react';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            profession: null,
            submitted: false,
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onProfessionChange = this.onProfessionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getInitialState() {
        return {
            submitted: false,
        };
    }
    
    onNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    onProfessionChange(event) {
        this.setState({
            profession: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            submitted: true
        });
    }

    render() {
        if (this.state.submitted && this.state.name !== '' && this.state.profession !== null) {
            return <Home name={this.state.name} profession={this.state.profession} />
        }
        return (
            <div>
                <div className="player-form">
                    <form onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend className="legend"> Your Character </legend>
                            <div className="player-name">
                                <h3> Who are you? </h3>
                                <input type="text" name="name" onChange={this.onNameChange} />
                            </div>
                            <div className="player-profession">
                                <h3> Your profession? </h3>
                                <div>
                                    <input type="radio" name="profession" value="Doctor" onChange={this.onProfessionChange} /> Doctor
                                </div>
                                <div>
                                    <input type="radio" name="profession" value="Soldier" onChange={this.onProfessionChange} /> Soldier
                                </div>
                                <div>
                                    <input type="radio" name="profession" value="Teacher" onChange={this.onProfessionChange} /> Teacher
                                </div>
                                <div>
                                    <input type="radio" name="profession" value="Athlete" onChange={this.onProfessionChange} /> Athlete
                                </div>
                                <div>
                                    <input type="radio" name="profession" value="Survivalist" onChange={this.onProfessionChange} /> Survivalist
                                </div>
                                <div>
                                    <input type="radio" name="profession" value="Scientist" onChange={this.onProfessionChange} /> Scientist
                                </div>
                                <div>
                                    <input type="radio" name="profession" value="Farmer" onChange={this.onProfessionChange} /> Farmer
                                </div>
                                <input type="submit" value="Submit" />
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}

export default Player;