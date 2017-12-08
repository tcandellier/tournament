import { PLAYERS_RECEIVED, PLAYER_RECEIVED, playerReceived } from './actions';

const initialState = [
    {
        idPlayer: "thomas",
        name: "Thomas"
    },
    {
        idPlayer: "victor",
        name: "Victor"
    },
    {
        idPlayer: "anny",
        name: "Anny"
    },
    {
        idPlayer: "celestine",
        name: "Celestine"
    },
    {
        idPlayer: "christine",
        name: "Christine"
    }
];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAYERS_RECEIVED:
            return action.players;
        case PLAYER_RECEIVED:
            return [state.players, ...action.player];
        default: return state;
    }
};

export default reducer;

// selectors
export const getPlayerBykey = (state, idPlayer) => state.players.find(player => player.idPlayer === idPlayer);