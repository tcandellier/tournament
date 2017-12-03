import { PLAYERS_RECEIVED, PLAYER_RECEIVED, playerReceived } from './actions';

const initialState = [
    {
        name: "Thomas"
    },
    {
        name: "Victor"
    },
    {
        name: "Anny"
    },
    {
        name: "Celestine"
    },
    {
        name: "Loupiotte"
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