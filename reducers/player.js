export default function player(state = {}, action) {
  switch (action.type) {
    case 'setName':
      return Object.assign({}, state, {
        name: action.value
      })
    case 'receiveSessionPlayers':
      return action.value.filter(player =>
        player.name === state.name
      )[0]
    default :
      return state
  }
}

export const getPlayer = state => state
