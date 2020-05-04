import {TOGGLE_SETTING} from '../actions';

const settings = (state = [], action) => {
  switch (action.type) {
  case TOGGLE_SETTING:
    return state.map(setting =>
                     setting.id === action.id ? { ...setting, value: !setting.value } : setting
                    )
    
  default:
    return state;
  }  
}

export default settings
