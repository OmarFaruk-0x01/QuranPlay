import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  StatusBar,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {LocalVideoCard} from '../../components/Cards/';
import {UploadScreenHeader} from '../../components/Headers';
import {ThemeColors} from '../../Constants/index';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FilePickerManager from 'react-native-file-picker';
import {RootState} from '../../Redux';
import {bindActionCreators} from 'redux';
import {UploadReducerActions} from '../../Redux/actions';
import {ScrollView} from 'react-native-gesture-handler';

const UploadScreen = () => {
  const {allLocalVideos} = useSelector((state: RootState) => state.uploader);
  const [endCount, setEndCount] = useState(11);
  const dispatch = useDispatch();
  const {LoadLocalVideos} = bindActionCreators(UploadReducerActions, dispatch);

  const onFilePickerClick = () => {
    FilePickerManager.showFilePicker(response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled file picker');
      } else if (response.error) {
        console.log('FilePickerManager Error: ', response.error);
      } else {
      }
    });
  };

  const renderLocalVideo = (props: {
    item: {
      mtime: Date | undefined;
      path: string | undefined;
      thumb: {path: string};
      duration: string;
    };
  }) => {
    if (props.item.path === '0') {
      return (
        <TouchableOpacity
          onPress={onFilePickerClick}
          style={{
            width: 120,
            marginHorizontal: 5,
            height: 200,
            backgroundColor: ThemeColors.whiterGray,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <IonIcons
            name={'ios-file-tray-full-outline'}
            color={ThemeColors.lightGrey}
            size={30}
          />
          <Text style={{color: ThemeColors.lightGrey}}>From File</Text>
        </TouchableOpacity>
      );
    } else if (props.item.path !== undefined) {
      return (
        <LocalVideoCard
          videoURI={props.item.path}
          duration={props.item.duration}
          thumbUri={props.item.thumb.path}
        />
      );
    }
    return null;
  };

  const keyExtractor = () => Math.random().toString();
  useEffect(() => {
    LoadLocalVideos();
  }, []);
  const onRefresh = useCallback(() => {
    console.log('refer');
    LoadLocalVideos();
  }, []);

  const loadMore = useCallback(() => {
    setEndCount(endCount + 5);
  }, [endCount]);

  console.log('Upload Screen');

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <StatusBar hidden={false} backgroundColor={'#000'} />
      <UploadScreenHeader />
      <FlatList
        contentContainerStyle={{}}
        data={[{path: '0'}, ...allLocalVideos.slice(0, endCount)]}
        keyExtractor={keyExtractor}
        renderItem={renderLocalVideo}
        refreshing={false}
        onRefresh={onRefresh}
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        windowSize={5}
        onEndReached={loadMore}
        onEndReachedThreshold={0}
        numColumns={4}
      />
      {/* <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={onRefresh} />}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <TouchableOpacity onPress={onFilePickerClick} style={{ width: 110, marginHorizontal: 5, height: 200, backgroundColor: ThemeColors.whiterGray, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <IonIcons name={'ios-file-tray-full-outline'} color={ThemeColors.lightGrey} size={30} />
                        <Text style={{ color: ThemeColors.lightGrey }}>From File</Text>
                    </TouchableOpacity>
                    {renderItemsInScrollView()}
                </View>
            </ScrollView> */}
    </View>
  );
};

export default UploadScreen;
