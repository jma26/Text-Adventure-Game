import './home.css';
import Death from './death.js';
import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            profession: this.props.profession,
            showDeath: false,
        }
        this.showDeathComponent = this.showDeathComponent.bind(this);
    }

    showDeathComponent() {
        this.setState({
            showDeath: true,
        });
    }

    render() {
        if (this.state.showDeath && this.state.name !== '' && this.state.profession !== null) {
            return <Death name={this.state.name} profession={this.state.profession} />
        }

        return (
            <div className="content">
                <div className="info-container">
                    <div className="player-info">
                        <h3> Player name: {this.state.name} </h3>
                        <h3> Profession: {this.state.profession} </h3>
                    </div>
                    <p className="story"> You wake up in a dark room and your memory is a bit hazy. Light is coming through your window and you smell something is cooking or burning </p>
                </div>
                <div className="player-options">
                    <button onClick={this.showDeathComponent}> Go back to sleep </button>
                    <button> Look outside the window </button>
                    <button> Don't care! Grab your gear and walk towards the door without checking </button>
                </div>
            </div>
        )
    }
}

export default Home;