import React from 'react';

import PlayerRow from '../components/PlayerRow';

const Ranking = ({ players }) => (
    <div class="page-content">
        <h2>Classement</h2>
        {/* Your content goes here */}
        <table class="mdl-data-table mdl-js-data-table">
            <thead>
                <tr>
                    <th>Rang</th>
                    <th class="mdl-data-table__cell--non-numeric">Joueur</th>
                    <th>Matchs joués</th>
                    <th class="mdl-layout--large-screen-only">Gagnés</th>
                    <th class="mdl-layout--large-screen-only">Perdus</th>
                    <th>Ratio G/J</th>
                </tr>
            </thead>
            <tbody>
                { players
                     .map(player =>
                         <PlayerRow player={player} key={player.name} />
                     )
                }                
            </tbody>
        </table>
        <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input" type="text" id="sample1" />
            <label class="mdl-textfield__label" for="sample1">Ajouter un joueur...</label>
        </div>
        <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
            <i class="material-icons">add</i>
        </button>
    </div>
);

export default Ranking;