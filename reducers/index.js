import { combineReducers } from 'redux';
import player, * as fromPlayer from './player';
import sessions from './sessions'
import currentSession from './currentSession'

export default combineReducers({
  player,
  sessions,
  currentSession,
});

export const getName = state => fromName.getName(state.name)
