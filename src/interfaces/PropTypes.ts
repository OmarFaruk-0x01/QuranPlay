import {TagModel, UserModel, VideoModel, PostMetaDataModel} from './DataModels';
export interface OnScreenPostProps {
  caption: string;
  tags: TagModel[];
  video: VideoModel;
  user: UserModel;
  meta: PostMetaDataModel;
  isPaused: boolean;
}
