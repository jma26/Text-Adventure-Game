import './home.css';
import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="info-container">
                    <div className="player-info">
                        <h3> Player name: {this.props.name} </h3>
                        <h3> Profession: {this.props.profession} </h3>
                    </div>
                    <p className="story"> You wake up in a dark room and your memory is a bit hazy. Light is coming through your window and you smell something is cooking or burning </p>
                </div>
                <div className="player-options">
                    <button> Go back to sleep </button>
                    <button> Look outside the window </button>
                    <button> Don't care! Grab your gear and walk towards the door without checking </button>
                </div>
            </div>
        )
    }
}

export default Home;