import { combineReducers } from 'redux';
import auth from './auth/reducer';
import user from './user/reducer';
import team from './team/reducer';
import project from './project/reducer';
import member from './member/reducer';

export default combineReducers({
  auth,
  user,
  team,
  project,
  member,
});
