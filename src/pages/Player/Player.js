import React, { Component } from 'react';
import PlayerCard from '../../components/PlayerCard/';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = { editing: false };
    }

    render() {
        const { playerExists, idPlayer } = this.props;
        return (
            <div className="page-content">
                <h2>Fiche Joueur</h2>
                {
                    playerExists ?
                        <PlayerCard idPlayer={idPlayer} />:
                        "Nouveau joueur"
                }
            </div>
        );
    }
}

export default Player;