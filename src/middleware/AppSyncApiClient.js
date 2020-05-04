import AWSAppSyncClient from "aws-appsync";

import {store} from '../store/store/store';

import {
  EVENT_LIST,
  EVENT_ENTRY_UPDATE,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_ERROR
} from '../store/actions';

import {
  listEventsQuery,
  eventsUpdateSubscriptionQuery,
  createUserCommentEntry
} from './GQL.js'

const util = require('util');

const debug = process.env.NODE_ENV === 'development';

const apiClient = new AWSAppSyncClient({
  url: process.env.REACT_APP_AWS_API,
  region: 'eu-west-1',
  auth: {
    type: 'API_KEY',
    apiKey: process.env.REACT_APP_AWS_API_KEY,
  },
  disableOffline: true,
});

export const postUserComment = async(comment, email) => {
  const result = await apiClient.mutate({
    mutation: createUserCommentEntry,
    variables: { 
      appId: 'p-22',
      comment: comment,
      email: email
    }
  }).then(res => {
    const data2 = res.data.createUserCommentEntry;
    if(debug) console.log(util.inspect(data2))

    store.dispatch({
      type: POST_COMMENT_SUCCESS,
    });

  }).catch(function (error) {
    if(debug) console.log(error);
    store.dispatch({
      type: POST_COMMENT_ERROR,
    });

  })

  ;
}

export const listEvents = async(projId, sk) => {
  const result = await apiClient.query({
    query: listEventsQuery,
    variables: { 
      projId: projId,
      sk: sk
    }
  }).then(res => {
    store.dispatch({
      type: EVENT_LIST,
      payload: res.data.selectAppSupportEntry.items
    });
  });
}



let eventsSubscrition = null;

export const eventsUpdateSubscription = (subscriptionId) => {

  if(debug) console.log('** subscribe: ' + subscriptionId);
  
  const observable = apiClient.subscribe({
    query: eventsUpdateSubscriptionQuery,
    variables: {
      sk: subscriptionId
    }
  });

  const realtimeResults = data =>  {
    if(debug) console.log('** updated data: ', util.inspect(data));

    let newdata = data.data.onUpdateAppSupportEntry;
    if(debug) console.log('** newdata: ', util.inspect(newdata));
    store.dispatch({ type: EVENT_ENTRY_UPDATE, data: newdata })
  };

  const rerrResults = data =>  {
    if(debug) console.log('** error data: ', util.inspect(data));
  }
  
  eventsSubscrition = observable.subscribe({
    next: realtimeResults,
    complete: console.log,
    error: rerrResults,
  });
}

export const eventsUpdateUnSubscribe = (subscriptionId) => {
  if(eventsSubscrition !== null) {
    eventsSubscrition.unsubscribe();
    eventsSubscrition = null;
  }
}
