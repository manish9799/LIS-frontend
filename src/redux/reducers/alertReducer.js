export const SUCCESS_ALERT = 'SUCCESS_ALERT'; 
export const INFO_ALERT = 'INFO_ALERT'; 
export const ERROR_ALERT = 'ERROR_ALERT';
export const PROGRESS_DONE = 'PROGRESS_DONE';
export const PROGRESS_START = 'PROGRESS_START';

const initialState = {
  message: '',
  type: '',
  progress:false
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_ALERT: {
      return {
        ...state,
        type: 'success',
        message: action.payload,
      };
    }
    case INFO_ALERT: {
      return {
        ...state,
        type: 'info',
        message: action.payload,
      };
    }
    case ERROR_ALERT:
      return {
        ...state,
        type: 'error',
        message: action.payload,
      };
    case PROGRESS_START:
      return {
        ...state,
        progress:true
      };
    case PROGRESS_DONE:
      return {
        ...state,
        progress:false
      };
      case "SET_INITIALSTATE":
        return state = initialState;
    default: {
      return state;
    }
  }
};

export default alertReducer;
