import {ExternalStorageDirectoryPath} from 'react-native-fs';
import {ScanDirs} from '../../Helpers';
import {UploadReducerActionTypes} from '../actionsTypes';
import {RNThumbnail} from '../../NativeModules';

const {LOADLOCALVIDEO, ER_LOADLOCALVIDEO} = UploadReducerActionTypes;

export const LoadLocalVideos = () => {
  return dispatch => {
    RNThumbnail.cleanDir();
    ScanDirs(ExternalStorageDirectoryPath)
      .then(allLocalVideos => {
        console.log(allLocalVideos);

        return dispatch({type: LOADLOCALVIDEO, payload: allLocalVideos});
      })
      .catch(e => {
        console.log(e);
        return dispatch({type: ER_LOADLOCALVIDEO, payload: e});
      });
  };
};
