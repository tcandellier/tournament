import React from 'react';

const PlayerRow = ({ player }) => (
    <tr>
        <td>1</td>
        <td class="mdl-data-table__cell--non-numeric">{player.name}</td>
        <td>8</td>
        <td class="mdl-layout--large-screen-only">6</td>
        <td class="mdl-layout--large-screen-only">2</td>
        <td>75%</td>
    </tr>
);

export default PlayerRow;