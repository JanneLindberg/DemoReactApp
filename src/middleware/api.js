import util from 'util';

import {
  RELOAD_LIST,
  CLOUD_ONLINE,
  CLOUD_UPLOAD,
  CLOUD_DOWNLOAD,
  POST_COMMENT,
  
  postCommentSuccess,
  cloudState,
  postCommandSuccess,
  reloadList,
  reloadListResult
} from "../store/actions";

import {
  listEvents,
  postUserComment
} from './AppSyncApiClient.js'


import {
  client,
  updateLocation,
  listLocationsQuery,
} from './AwsClient.js'


const debug = process.env.NODE_ENV === 'development';

const apiMiddleware = ({ dispatch }) => next => action => {

  if(debug) console.log('*** RELOAD:' + util.inspect(action))

  switch(action.type) {

  case POST_COMMENT:
    postUserComment(action.comment, action.email === '' ? null : action.email);
    break;

  case RELOAD_LIST:
    dispatch(cloudState(CLOUD_DOWNLOAD));

    client.query({
      query: listLocationsQuery,
      fetchPolicy: 'network-only',
    }).then(({ data }) => {
      dispatch(reloadListResult(data.listLocations.items));
      dispatch(cloudState(CLOUD_ONLINE));
    })

    break;

  default:
    console.log('** Err')
    break;
  }

  next(action);
};

export default apiMiddleware;
