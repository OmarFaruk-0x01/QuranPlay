
package com.quranplay;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import android.media.ThumbnailUtils;
import android.provider.MediaStore;
import android.provider.MediaStore.Video.Thumbnails;
import android.graphics.Bitmap;
import android.os.Environment;
import android.util.Log;
import android.media.MediaMetadataRetriever;
import 	android.graphics.Matrix;

import java.util.UUID;
import java.io.File;
import java.io.OutputStream;
import java.io.FileOutputStream;


public class RNThumbnailModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNThumbnailModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNThumbnail";
  }

  @ReactMethod
  public void cleanDir(){
    String fullPath = Environment.getExternalStorageDirectory().getAbsolutePath() + "/.thumb";
    File dir = new File(fullPath);
    if (!dir.exists()) {
        dir.mkdirs();
    }else{
      String[] myFiles = dir.list();  
      if (myFiles != null){
        for (int i=0; i<myFiles.length; i++) {  
            File myFile = new File(dir, myFiles[i]);   
            myFile.delete();  
          }  
      }
    }
  }

  @ReactMethod
  public void get(String filePath, Promise promise) {
    filePath = filePath.replace("file://","");
    MediaMetadataRetriever retriever = new MediaMetadataRetriever();
    retriever.setDataSource(filePath);
    Bitmap image = retriever.getFrameAtTime(1000000, MediaMetadataRetriever.OPTION_CLOSEST_SYNC);
    String duration = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_DURATION);

    String fullPath = Environment.getExternalStorageDirectory().getAbsolutePath() + "/thumb";
    Log.i("Path", fullPath);
    Log.i("Video", filePath);
    Log.i("Video-duration", duration);

    try {
      File dir = new File(fullPath);
      if (!dir.exists()) {
        dir.mkdir();
        Log.i("Created New Folder", dir.getPath());
      }

      OutputStream fOut = null;
      // String fileName = "thumb-" + UUID.randomUUID().toString() + ".jpeg";
      String fileName = "thumb-" + UUID.randomUUID().toString() + ".jpeg";
      File file = new File(fullPath, fileName);
      file.createNewFile();
      fOut = new FileOutputStream(file);

      // 100 means no compression, the lower you go, the stronger the compression
      Log.d("Before Image", "Before Image Write");

      image.compress(Bitmap.CompressFormat.JPEG, 100, fOut);
      Log.d("After Image", "After Image Write");
      fOut.flush();
      fOut.close();

      // MediaStore.Images.Media.insertImage(reactContext.getContentResolver(), file.getAbsolutePath(), file.getName(), file.getName());

      WritableMap map = Arguments.createMap();

      map.putString("path", "file://" + fullPath + '/' + fileName);
      map.putDouble("width", image.getWidth());
      map.putDouble("height", image.getHeight());
      map.putString("duration", duration);

      promise.resolve(map);
    } catch (Exception e) {
      Log.e("E_RNThumnail_ERROR", e.getMessage());
      promise.reject("E_RNThumnail_ERROR", e);
    }
  }
}
