import { combineReducers } from 'redux';
import name, * as fromName from './name';
import sessions from './sessions'
import currentSession from './currentSession'

export default combineReducers({
  name,
  sessions,
  currentSession,
});

export const getName = state => fromName.getName(state.name)
