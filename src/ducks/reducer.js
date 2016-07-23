import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';
import { merge, omit } from 'lodash';

import application from './application/application';

export default combineReducers({
  routing: routeReducer,
  reduxAsyncConnect,
  application
});
