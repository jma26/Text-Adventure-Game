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
        return (
            <div>
            <h1> Test </h1>
            <h1> {this.state.name} as a {this.state.profession} </h1>
            </div>
        )
    }
}

export default Death;