import { connect } from 'react-redux';
import PlayerCard from './PlayerCard';
import { getPlayerBykey } from '../../store';

const mapStateToProps = (state, { idPlayer }) => ({
    player: getPlayerBykey(state, idPlayer)
});

const enhance = connect(mapStateToProps);

export default enhance(PlayerCard);