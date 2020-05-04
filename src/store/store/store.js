import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../reducers'

import apiMiddleware from "../../middleware/api";

import {
  CLOUD_ONLINE,
} from '../actions'

const debug = process.env.NODE_ENV === 'development';

export const store = createStore(rootReducer, {

  cloudState: CLOUD_ONLINE,

  user: {
    name: '',
    loggedIn: false
  },
  
  notifications: {
    msg: [
      {id: '1', title: 'the title', body: 'Some notification message text'},
      {id: '2', title: 'the title 2', body: 'Some notification message text 2'},
      {id: '3', title: 'the title 3', body: 'Some notification message text 3'},
    ],
    num: 3,
  },
  
  settings: [
    {id: 'x1', label: 'x1', value: false, icon_on: 'star'},
    {id: 'email', label: 'e-mail', value: true, icon_on: 'email' },
    {id: 'sms', label: 'SMS', value: true, icon_on: 'sms' },
    {id: 'alarm', label: 'Alarm', value: false, icon_on: 'alarm_on', icon_off: 'alarm_off'},
    {id: 'report', label: 'Report', value: false, icon_on: 'report_on', icon_off: 'report_off'},
  ],

  events: [
    {
      sk: '--sk--1',
      title: 'test-title-1',
      description: 'desc',
      content: 'some content for item.1'
    },
    {
      sk: '--sk--2',
      title: 'test-XA-32',
      description: 'desc-2',
      content: 'some content for item.2'
    },
    {
      sk: '--sk--3',
      title: 'test-title-3',
      description: 'desc-3'
    },
    {
      sk: '--sk--4',
      title: 'test-title-4',
      description: 'desc-4'
    },
    {
      sk: '--sk--5',
      title: 'test-title-5',
      description: 'desc-5'
    }
  ],
  
},
                                 applyMiddleware(
                                   logger, apiMiddleware)
                                )

function logger({ getState, dispatch }) {

  return next => action => {
    if(debug) console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    if(debug) console.log('state after dispatch', store.getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

store.subscribe(() => console.log('** STORE SUBSCR:' + store.getState()))
