import game from './game'

export default function currentSession(state = {}, action) {
  switch (action.type) {
    case 'setCurrentSession':
      return action.value
    case 'receiveSessionPlayers':
      return Object.assign({}, state, {
        players: action.value
      })
    case 'gameState':
      return Object.assign({}, state, {
        game: game(state.game, action)
      })
    default:
      return state
  }
}
