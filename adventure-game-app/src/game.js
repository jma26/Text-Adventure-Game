import Player from './player.js';
import './game.css';
import React from 'react';

class Game extends React.Component {
    render() {
        return (
            <div>
                <header  className="Game-header">
                    <h1 className="Game-title"> Welcome to My Text-Adventure Game </h1>
                </header>
                <div className="Game-player">
                    <Player />
                </div>
            </div>
        );
    }
}

export default Game;