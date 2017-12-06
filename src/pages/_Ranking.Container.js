import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';

import Ranking from './Ranking';

const mapStateToProps = state => ({
    players: state.players
});

const mapDispatchToProps = dispatch => ({
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Ranking);
