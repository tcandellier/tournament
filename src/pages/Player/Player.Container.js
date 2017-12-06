import { connect } from 'react-redux';
import Player from './Player';
import { getPlayerBykey } from '../../store';

const mapStateToProps = (state, props) => ({
    playerExists: getPlayerBykey(state, props.match.params.key)
});

const enhance = connect(mapStateToProps);
export default enhance(Player);