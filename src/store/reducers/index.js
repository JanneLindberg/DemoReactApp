import { combineReducers } from 'redux'
import cloudState from './cloudState'
import events from './events'
import notifications from './notifications'
import user from './user'
import settings from './settings'

export default combineReducers({
  user,
  cloudState,
  events,
  notifications,
  settings
})
