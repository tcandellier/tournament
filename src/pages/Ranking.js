import React from 'react';
import { Link } from 'react-router-dom';

import PlayerRow from '../components/PlayerRow';

const Ranking = ({ players }) => (
    <div className="page-content">
        <h2>Classement</h2>
        {/* Your content goes here */}
        <table className="mdl-data-table mdl-js-data-table">
            <thead>
                <tr>
                    <th>Rang</th>
                    <th className="mdl-data-table__cell--non-numeric">Joueur</th>
                    <th>Matchs joués</th>
                    <th className="mdl-layout--large-screen-only">Gagnés</th>
                    <th className="mdl-layout--large-screen-only">Perdus</th>
                    <th>Ratio G/J</th>
                </tr>
            </thead>
            <tbody>
                {players
                    .map(player =>
                        <PlayerRow player={player} key={player.idPlayer} />
                    )
                }
            </tbody>
        </table>
        {/* <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" id="sample1" />
            <label className="mdl-textfield__label" htmlFor="sample1">Ajouter un joueur...</label>
        </div> */}
        <Link to={`/player/`}>
            <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                <i className="material-icons">add</i>
            </button>
        </Link>
    </div>
);

export default Ranking;