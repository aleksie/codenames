export default function name(state = '', action) {
  switch (action.type) {
    case 'setName':
      return action.value
    default :
      return state
  }
}

export const getName = state => state
