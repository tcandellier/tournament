import React from 'react';
import { Link } from 'react-router-dom';

const PlayerRow = ({ player }) => (
    <tr>
        <td>1</td>
        <td className="mdl-data-table__cell--non-numeric">
            <Link to={`/player/${player.idPlayer}`}>{player.name}</Link>
        </td>
        <td>8</td>
        <td className="mdl-layout--large-screen-only">6</td>
        <td className="mdl-layout--large-screen-only">2</td>
        <td>75%</td>
    </tr>
);

export default PlayerRow;