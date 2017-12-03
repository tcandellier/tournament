export const PLAYERS_RECEIVED = 'PLAYERS_RECEIVED';
export const PLAYER_RECEIVED = 'PLAYER_RECEIVED';

export function playersReceived(players) {
  return {
    type: PLAYERS_RECEIVED,
    players
  };
}

export function playerReceived(player) {
  return {
    type: PLAYER_RECEIVED,
    player
  };
}
