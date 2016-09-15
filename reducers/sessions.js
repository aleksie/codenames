export default function sessions(state = [], action) {
  switch (action.type) {
    case 'receiveSessions':
      return action.value
    default:
      return state
  }
}
