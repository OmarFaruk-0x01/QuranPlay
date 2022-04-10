import {PermissionsAndroid} from 'react-native';

const requestStoragePermission = async (cb: Function) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
    cb(granted, null);
  } catch (err) {
    cb(null, err);
  }
};

export default requestStoragePermission;
