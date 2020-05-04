import {
  CLOUD_OFFLINE,
  CLOUD_ONLINE,
  CLOUD_UPLOAD,
  CLOUD_DOWNLOAD,
} from '../actions'

const cloudState = (state = [], action) => {
  switch (action.type) {
  case CLOUD_OFFLINE:
  case CLOUD_ONLINE:
  case CLOUD_UPLOAD:
  case CLOUD_DOWNLOAD:
    return action.type;
    
  default: return state;  
  }  
}

export default cloudState
