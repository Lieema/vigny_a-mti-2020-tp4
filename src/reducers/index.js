import { combineReducers } from 'redux';

import game from './game';
import targets from './targets'

const reducers = combineReducers({
  targets,
  game
});

export default reducers;
