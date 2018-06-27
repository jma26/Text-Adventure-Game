import './game.css';
import React from 'react';
import ReactDOM from 'react-dom';

class Game extends React.Component {
    render() {
        return (
            <header  className="Game-header">
                <h1 className="Game-title"> Welcome to My Text-Adventure Game </h1>
            </header>
        );
    }
}

export default Game;