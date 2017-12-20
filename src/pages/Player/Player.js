import React, { Component, Fragment } from 'react';
import PlayerCard from '../../components/PlayerCard/';
import PlayerForm from '../../components/PlayerForm/';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = { editing: false };
    }

    render() {
        const { playerExists, idPlayer } = this.props;
        return (
            <div className="page-content">
                {
                    playerExists ?
                        <Fragment>
                            <h2>Fiche Joueur</h2>
                            <PlayerCard idPlayer={idPlayer} />
                        </Fragment > :
                        <Fragment>
                            <h2>Nouveau Joueur</h2>
                            <PlayerForm idPlayer={idPlayer} />
                        </Fragment>
                }
            </div>
        );
    }
}

export default Player;