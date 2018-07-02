import './warning.css';
import React from 'react';

class Warning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            profession: this.props.profession,
        };
    }

    render() {
        return(
            <div className="content">
                <div className="info-container">
                    <div className="player-info">
                        <h3> Player name: {this.state.name} </h3>
                        <h3> Profession: {this.state.profession} </h3>
                    </div>
                    <p className="story"> You look outside the window and there's a fire! Nearby, a group of armed men are torching nearby structures. </p> 
                </div>
                <div className="player-options">
                    <button> Curse at the men </button>
                    <button> Go out and fight them </button>
                    <button> Go out and extinquish the flames </button>
                </div>
            </div>
        )
    }
}

export default Warning;