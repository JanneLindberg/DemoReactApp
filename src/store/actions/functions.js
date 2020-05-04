
import {
  CLOUD_OFFLINE, CLOUD_ONLINE, CLOUD_UPLOAD, CLOUD_DOWNLOAD,
  POST_COMMAND, POST_COMMAND_SUCCESS, POST_COMMAND_ERROR,
  
  POST_COMMENT, POST_COMMENT_SUCCESS, POST_COMMENT_ERROR,

  UPDATE_LOCATION, CREATE_LOCATION,
  RELOAD_LIST, RELOAD_LIST_RESP,
  
  SET_NOTIFICATIONS,
  CLEAR_NOTIFICATION,
    
}
from './constants.js';

export const reloadList = data => ({
  type: RELOAD_LIST,
  payload: {
    data
  }
})

export const reloadListResult = data => ({
  type: RELOAD_LIST_RESP,
  payload: {
    data
  }
})

export const createLocation = payload => ({
  type: CREATE_LOCATION,
  date: payload
});

export const updateLocation = payload => ({
  type: UPDATE_LOCATION,
  data: payload
});

export const postComment = (comment, email) => ({
  type: POST_COMMENT,
  comment,
  email
});

export const postCommentSuccess = () => ({
  type: POST_COMMENT_SUCCESS,
});

export const postCommand = payload => ({
  type: POST_COMMAND,
  payload
});

export const postCommandSuccess = data => ({
  type: POST_COMMAND_SUCCESS,
  data
});

export const clearNotification = id => ({
  type: CLEAR_NOTIFICATION,
  id: id
});


export const cloudState = state => ({
  type: state
});

