import './approach.css';
import React from 'react';

class Approach extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            profession: this.props.profession
        };
    }

    render() {
        return (
            <div className="content">
                <div className="info-container">
                    <div className="player-info">
                        <h3> Player name: {this.state.name} </h3>
                        <h3> Profession: {this.state.profession} </h3>
                    </div>
                    <p className="story"> You go outside with your gear and you are shocked to see nearby structures on fire! Nearby, a group of armed men with torches are running towards you </p>
                </div>
                <div className="player-options">
                    <button> Panic, run away! </button>
                    <button> Stand your ground and fight them </button>
                    <button> Diffuse their anger with the power of charisma </button>
                </div>
            </div>
        )
    }
}

export default Approach;