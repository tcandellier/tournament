import React, { Component } from 'react';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = { editing: false };
    }

    render() {
        const { playerExists, key } = this.props;
        return (
            <div class="page-content">
                <h2>Fiche Joueur</h2>
                {
                    playerExists ?
                        "Joueur existant" :
                        "Nouveau joueur"
                }
            </div>
        );
    }
}

export default Player;