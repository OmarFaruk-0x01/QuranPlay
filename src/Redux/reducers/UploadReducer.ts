import {ActionDispatchType} from '../../interfaces';
import {UploadReducerActionTypes} from '../actionsTypes';
const {LOADLOCALVIDEO, ER_LOADLOCALVIDEO} = UploadReducerActionTypes;

interface UploadReducerState {
  allLocalVideos: {mtime: Date | undefined; path: string | undefined}[];
}

const initialUploadReducerState: UploadReducerState = {
  allLocalVideos: [],
};

const UploadReducer = (
  state: UploadReducerState = initialUploadReducerState,
  action: ActionDispatchType,
) => {
  switch (action.type) {
    case LOADLOCALVIDEO:
      return {...state, allLocalVideos: action.payload};
    case ER_LOADLOCALVIDEO:
      return state;
    default:
      return state;
  }
};

export default UploadReducer;
