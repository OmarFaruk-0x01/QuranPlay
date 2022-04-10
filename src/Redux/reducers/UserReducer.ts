import {ActionDispatchType} from '../../interfaces';
import {UploadReducerActionTypes} from '../actionsTypes';
const {LOADLOCALVIDEO, ER_LOADLOCALVIDEO} = UploadReducerActionTypes;

interface UserReducerState {
  id: string;
  fullname: string;
  username: string;
  email: string;
  favourite_videos_thumbs: {
    thumb_id: string;
    thumb_url: string;
    video_id: string;
    video_url: string;
    video_duration: string;
    video_views: string;
  }[];
  videos_thumbs: {
    thumb_id: string;
    thumb_url: string;
    video_id: string;
    video_url: string;
    video_duration: string;
    video_views: string;
  }[];
  meta: {
    follower: number;
    following: number;
    total_posts: number;
    total_likes: number;
  };
}

const initialUserReducerState: UserReducerState = {
  id: '',
  fullname: '',
  username: '',
  email: '',
  favourite_videos_thumbs: [],
  meta: {follower: 0, following: 0, total_likes: 0, total_posts: 0},
  videos_thumbs: [],
};

const UserReducer = (
  state: UserReducerState = initialUserReducerState,
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

export default UserReducer;
