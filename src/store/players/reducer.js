import { PLAYERS_RECEIVED, PLAYER_RECEIVED, playerReceived } from './actions';

const initialState = [
    {
        key: "thomas",
        name: "Thomas"
    },
    {
        key: "victor",
        name: "Victor"
    },
    {
        key: "anny",
        name: "Anny"
    },
    {
        key: "celestine",
        name: "Celestine"
    },
    {
        key: "christine",
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
export const getPlayerBykey = (state, key) => state.players.find(player => player.key === key);