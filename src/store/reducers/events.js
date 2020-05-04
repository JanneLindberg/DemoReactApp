
import util from 'util';

import {
  FETCH_EVENTS_SUCCESS,
  EVENT_ENTRY_UPDATE,
  EVENT_LIST,
  RELOAD_LIST_RESP
} from '../actions'

const debug = process.env.NODE_ENV === 'development';

const getNewState = (state, newState) => {
  return Object.assign({}, state, newState);
}

const events = (state = [], action) => {
  switch (action.type) {

  case EVENT_ENTRY_UPDATE:
    return state.map(event =>
                     event.sk === action.data.sk ? { ...event, ...action.data } : event )

  case EVENT_LIST:
    return action.payload;
    
  case RELOAD_LIST_RESP:
    return action.payload.data;

  case FETCH_EVENTS_SUCCESS:
    const { payload: events } = action;

    return getNewState(state, {
      events
    });
    
    default:
      return state
  }
}

export default events
