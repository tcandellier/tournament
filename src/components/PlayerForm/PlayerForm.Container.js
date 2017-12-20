import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';
import { getPlayerBykey } from '../../store';


const mapStateToProps = (state, {idPlayer}) => ({
    player: idPlayer ? getPlayerBykey(idPlayer) : null  
});

const mapDispatchToProps = (dispatch, {id}) => ({
    //submit: (partialPlayer) => dispatch()
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(PlayerForm);