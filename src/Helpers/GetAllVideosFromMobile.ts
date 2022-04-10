import FS from 'react-native-fs';
import {RNThumbnail} from '../NativeModules';
const DefaultVideoDirs = ['android', 'alarms', 'telegram', 'whatsapp'];
const Extantions = ['mp4', '3gp', 'webm', 'mkv'];

function msToTime(s: number) {
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  if (mins < 10) {
    mins = '0' + mins;
  }
  if (hrs < 10) {
    hrs = '0' + hrs;
  }
  if (secs < 10) {
    secs = '0' + secs;
  }

  return hrs + ':' + mins + ':' + secs;
}

export async function scanDir(
  pathOfDirToScan: string,
  file: {
    mtime: Date | undefined;
    path: string | undefined;
    thumb: {path: string};
    duration: string;
  }[] = [],
) {
  const readedFilesAndDir = await FS.readDir(pathOfDirToScan);
  for (var fileObj of readedFilesAndDir) {
    if (fileObj.isDirectory()) {
      if (
        !DefaultVideoDirs.find(folderName =>
          fileObj.name.toLowerCase().includes(folderName),
          )
          ) {
            const directoryPath = pathOfDirToScan + '/' + fileObj.name;
            await scanDir(directoryPath, file);
          }
        } else {
          const ext = fileObj.name.split('.').pop();
          if (Extantions.includes(ext?.toLowerCase() as string)) {
            const thumbResult = await RNThumbnail.get(fileObj.path);
        console.log(await RNThumbnail.get(fileObj.path));
        
        if (
          parseInt(thumbResult.duration) < 78000 &&
          parseInt(thumbResult.duration) > 10000
        ) {
          
          file.push({
            mtime: fileObj.mtime,
            path: fileObj.path,
            thumb: {path: thumbResult.path},
            duration: msToTime(parseInt(thumbResult.duration)),
          });
        }
      }
    }
  }
  return file.sort(function (a, b) {
    return !!a.mtime && !!b.mtime ? b.mtime.getTime() - a.mtime?.getTime() : 0;
  });
}
