
import { SET_NOTIFICATIONS, CLEAR_NOTIFICATION } from '../actions'

const getNewState = (state, newState) => {
  return Object.assign({}, state, newState);
}

const notifications = (state = [], action) => {
  switch (action.type) {
  case SET_NOTIFICATIONS:
    return {
      num: action.count,
      msg: [action.messages]
    };

  case CLEAR_NOTIFICATION: {
    let msg = state.msg.filter((entry) => {
      return action.id !== entry.id
    })

    return {
      num: msg.length,
      msg: msg
    };
  }

  default:
    return state;
  }

}

export default notifications
