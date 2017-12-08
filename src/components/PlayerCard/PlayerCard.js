import React, { Component } from 'react';

class PlayerCard extends Component {
    render() {
        const { player, idPlayer } = this.props;
        return (
            <div>
                Nom: {player.name}
                <br/>
                Key: {idPlayer}
            </div>
        );
    }
}

export default PlayerCard;