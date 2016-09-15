export default function game(state = {}, action) {
  switch (action.type) {
    case 'gameState':
      return action.value
    default:
      return state
  }
}
