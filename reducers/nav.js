import history from '../core/history'

const LOADING = 'loading'
const CHOOSE_NAME = 'choose-name'
const CHOOSE_SESSION = 'choose-session'


export default function nav(state = LOADING, action) {
  switch (action.type) {
    case 'NAVIGATE':
      history.push(`/${action.value.toLowerCase()}` )
      return action.value
    default :
      return state
  }
}

export const getNav = state => state
