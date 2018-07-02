import './death.css';
import React from 'react';

class Death extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            profession: this.props.profession
        };
    }
    render() {
        if (this.props.reason === 'fire') {
            return (
                <div className="content">
                    <div className="info-container">
                        <div className="player-info">
                            <h3> Player name: {this.state.name} </h3>
                            <h3> Profession: {this.state.profession} </h3>
                        </div>
                        <div className="story">
                            <h1> Game over! </h1>
                            <p> You died from {this.props.reason}. Little did you know your building was on fire and you were slowly engulfed in flames....Better luck next time </p>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className="content">
                <div className="info-container">
                    <div className="player-info">
                        <h3> Player name: {this.state.name} </h3>
                        <h3> Profession: {this.state.profession} </h3>
                    </div>
                    <div className="story">
                        <h1> Game over! </h1>
                        <h1> You died from {this.props.reason} </h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Death;