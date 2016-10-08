import game from './game'

const defaultState = {
  players: [],
  chat: [],
  id: '',
  name: ''
}

export default function currentSession(state = defaultState, action) {
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
    case 'chatMessage':
      return Object.assign({}, state, {
        chat: action.value
      })
    default:
      return state
  }
}
