import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';

const mapStateToProps = (state, { id }) => ({
    player: { name: 'fakePlayer' }
});

const mapDispatchToProps = (dispatch, {id}) => ({
    //submit: (partialPlayer) => dispatch()
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(PlayerForm);