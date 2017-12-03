import React from 'react';

import PlayerRow from '../components/playerrow';

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
                { players.length
                    // .map(player =>
                    //     <PlayerRow player={player} key={player.name} />
                    // )
                }
                <tr>
                    <td>1</td>
                    <td class="mdl-data-table__cell--non-numeric">Thomas</td>
                    <td>8</td>
                    <td class="mdl-layout--large-screen-only">6</td>
                    <td class="mdl-layout--large-screen-only">2</td>
                    <td>75%</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td class="mdl-data-table__cell--non-numeric">Victor</td>
                    <td>8</td>
                    <td class="mdl-layout--large-screen-only">5</td>
                    <td class="mdl-layout--large-screen-only">3</td>
                    <td>63.3%</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td class="mdl-data-table__cell--non-numeric">Roger</td>
                    <td>9</td>
                    <td class="mdl-layout--large-screen-only">6</td>
                    <td class="mdl-layout--large-screen-only">3</td>
                    <td>66.6%</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td class="mdl-data-table__cell--non-numeric">Henri</td>
                    <td>9</td>
                    <td class="mdl-layout--large-screen-only">4</td>
                    <td class="mdl-layout--large-screen-only">5</td>
                    <td>36.6%</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td class="mdl-data-table__cell--non-numeric">Raymond</td>
                    <td>5</td>
                    <td class="mdl-layout--large-screen-only">2</td>
                    <td class="mdl-layout--large-screen-only">3</td>
                    <td>40%</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td class="mdl-data-table__cell--non-numeric">Daniel</td>
                    <td>8</td>
                    <td class="mdl-layout--large-screen-only">2</td>
                    <td class="mdl-layout--large-screen-only">6</td>
                    <td>25%</td>
                </tr>
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