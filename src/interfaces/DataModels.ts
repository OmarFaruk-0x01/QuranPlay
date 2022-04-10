export interface UserModel {
  userID: string;
  fullname: string;
  username: string;
  avatarURL: string;
  meta?: UserMetaDataModel;
}
export interface UserMetaDataModel {
  userID: string;
  follow: number;
  following: number;
}
export interface VideoModel {
  videoID: string;
  url: string;
  duration: number;
  width: number;
  height: number;
}

export interface TagModel {
  tagID: string;
  tag: string;
}

export interface PostMetaDataModel {
  loved: number;
  downloaded: number;
  shared: number;
}

export interface PostModel {
  postID: string;
  userID: string;
  caption: string;
  user: UserModel;
  tags: TagModel[];
  video: VideoModel;
  meta: PostMetaDataModel;
}
