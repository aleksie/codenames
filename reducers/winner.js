export default function winner(state = false, action) {
  console.log('reduce?')
  console.log(action)
  switch (action.type) {
    case 'WINNER':
      return action.value
    default :
      return state
  }
}

export const getWinner = state => state
