import { combineReducers } from 'redux';
import playersReducer, * as players from './players/reducer';

export default combineReducers({
    players: playersReducer
});

export const getPlayerBykey = (state, key) => players.getPlayerBykey(state, key);