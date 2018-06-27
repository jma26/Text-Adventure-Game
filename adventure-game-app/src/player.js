import './player.css';
import React from 'react';

class Player extends React.Component {
    render() {
        return (
            <div>
                <div className="player-form">
                    <form>
                        <fieldset>
                            <legend className="legend"> Your Character </legend>
                            <div className="player-name">
                                <h3> Who are you? </h3>
                                <input type="text" name="name"/>
                            </div>
                            <div className="player-profession">
                                <h3> Your profession? </h3>
                                <div>
                                    <input type="radio" name="profession" value="Doctor" /> Doctor
                                </div>
                                <div>
                                    <input type="radio" name="profession" value="Soldier" /> Soldier
                                </div>
                                <div>
                                    <input type="radio" name="profession" value="Teacher" /> Teacher
                                </div>
                                <div>
                                    <input type="radio" name="profession" value="Athlete" /> Athlete
                                </div>
                                <div>
                                    <input type="radio" name="profession" value="Survivalist" /> Survivalist
                                </div>
                                <div>
                                    <input type="radio" name="profession" value="Scientist" /> Scientist
                                </div>
                                <div>
                                    <input type="radio" name="profession" value="Farmer" /> Farmer
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