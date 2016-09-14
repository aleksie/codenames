import { combineReducers } from 'redux';
import winner, * as fromWinner from './winner';
import nav from './nav';

export default combineReducers({
  winner,
  nav
});

export const getWinner = state => fromWinner.getWinner(state.winner)
