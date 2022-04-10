import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Pressable,
  StatusBar,
  Dimensions,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Video from 'react-native-video';
import {FontFamilies} from '../../Constants';
import {ThemeColors} from '../../Constants/index';

const PreviewScreenHeader = () => {
  const nav = useNavigation();
  function goBack() {
    nav.goBack();
  }
  return (
    <View style={styles.previewScreenHeader}>
      <TouchableOpacity onPress={goBack}>
        <AntDesign name={'back'} size={25} color={'#000'} />
      </TouchableOpacity>
    </View>
  );
};

const Input = React.memo(
  React.forwardRef((props, ref) => {
    const [text, setText] = useState('');
    function onChangeText(e) {
      setText(e);
      ref.current = e;
    }

    return (
      <View style={[styles.inputContainer, {...props.style}]}>
        <Text style={styles.inputHeaderText}>{props.title}</Text>
        <TextInput
          value={text}
          onChangeText={onChangeText}
          style={styles.input}
          textAlignVertical={'top'}
          placeholder={'Aa...'}
        />
      </View>
    );
  }),
);

const InputWithTags = React.memo(
  React.forwardRef<string, []>((props, ref) => {
    const [tags, setTags] = useState<string[]>([]);
    const [text, setText] = useState<string>('');
    ref.current = tags;

    const onChangeText = useCallback(
      e => {
        if (e.endsWith(' ')) {
          const tmp = e.split(' ');
          setTags([
            ...tags,
            ...tmp.filter(
              (i, index, self) => i !== '' && self.indexOf(i) === index,
            ),
          ]);
          setText('');
        } else {
          setText(e);
        }
      },
      [text],
    );

    const onDelete = e => {
      setTags([...tags.filter(i => i !== e)]);
    };

    function renderTags() {
      return tags.map(t => (
        <View key={Math.random().toString()} style={styles.tagContainer}>
          <Text style={styles.tagText}>{t}</Text>
          <Pressable onPress={() => onDelete(t)}>
            <AntDesign name={'close'} size={15} color={'#fff'} />
          </Pressable>
        </View>
      ));
    }

    return (
      <View style={[styles.inputContainer, {minHeight: 65}]}>
        <Text style={styles.inputHeaderText}>Tags</Text>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          {tags.length > 0 && (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingHorizontal: 2,
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              {renderTags()}
            </View>
          )}
          <TextInput
            value={text}
            onChangeText={onChangeText}
            style={[styles.input, {minWidth: 100}]}
            textAlignVertical={'top'}
            placeholder={'Aa...'}
          />
        </View>
      </View>
    );
  }),
);

const PostPreviewScreen = () => {
  const {params} = useRoute();
  const tagRef = useRef([]);
  const reciterRef = useRef('');
  const captionRef = useRef('');
  const ScreenWidth = Dimensions.get('window').width;
  const [videoPaused, setVideoPaused] = useState(true);
  function UploadHandler() {
    console.log(tagRef);
    console.log(reciterRef);
    console.log(captionRef);
  }

  function toggolVideoPlay() {
    setVideoPaused(!videoPaused);
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 3}}>
      <StatusBar hidden={false} />
      <PreviewScreenHeader uploadHandler={UploadHandler} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10, marginBottom: 10}}>
        <View style={{height: 350, alignItems: 'center', flex: 1}}>
          <View
            style={{
              position: 'absolute',
              height: 350,
              width: '100%',
              borderWidth: 10,
              borderRadius: 15,
              borderColor: 'white',
            }}></View>
          <View
            style={{
              position: 'absolute',
              height: 350,
              width: '100%',
              borderWidth: 10,
              borderRadius: 0,
              borderColor: 'white',
            }}></View>
          <Video
            source={{
              uri: params.videoURI,
            }}
            resizeMode="cover"
            style={{height: 350, width: '100%', zIndex: -1}}
            paused={videoPaused}
            repeat={true}
          />
          <TouchableOpacity
            onPress={toggolVideoPlay}
            activeOpacity={0.7}
            style={styles.VideOverlay}>
            {videoPaused && (
              <View style={styles.playButton}>
                <AntDesign name={'play'} size={75} color={'#000d'} />
              </View>
            )}
          </TouchableOpacity>
        </View>
        {/* <View style={styles.previewVideoContainer}>
          <Video
            source={{uri: params.videoURI, type: 'mp4'}}
            resizeMode={'cover'}
            paused={videoPaused}
            onError={e => {
              console.log(e);
            }}
            onLoadStart={() => {
              console.log('Start');
            }}
            style={styles.previewVideo}
            repeat={true}
          />
          
        </View> */}
        <Input ref={reciterRef} style={{minHeight: 66}} title={'Reciter'} />
        <InputWithTags ref={tagRef} />
        <Input style={{height: 140}} ref={captionRef} title={'Caption'} />
        <TouchableOpacity style={styles.uploadButton} onPress={UploadHandler}>
          <Text style={styles.buttonText}>Upload</Text>
          <AntDesign name={'upload'} size={20} color={'#fff'} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default PostPreviewScreen;

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 14,
    fontFamily: FontFamilies.ComfortaaBold,
    color: '#fff',
    marginHorizontal: 4,
  },
  previewScreenHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    paddingVertical: 9,
    width: '100%',
    zIndex: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  VideOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewVideo: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    // borderRadius: 8,
  },
  previewVideoContainer: {
    height: 400,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: ThemeColors.whiterGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    backgroundColor: '#fffc',
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 500,
    overflow: 'visible',
  },
  inputContainer: {
    marginVertical: 4,
    minHeight: 66,
    padding: 3,
  },
  inputContainerWrapper: {
    flexDirection: 'row',
  },
  inputHeaderText: {
    color: ThemeColors.lightGrey,
    textTransform: 'uppercase',
    fontFamily: FontFamilies.ComfortaaMedium,
  },
  input: {
    flex: 1,
    paddingVertical: 3,
    borderRadius: 4,
    paddingHorizontal: 4,
    backgroundColor: ThemeColors.whiterGray,
    fontSize: 15,
    fontFamily: FontFamilies.ComfortaaRegular,
    marginTop: 4,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    paddingVertical: 1,
    backgroundColor: ThemeColors.primaryColor,
    marginHorizontal: 2,
    marginVertical: 2,
    borderRadius: 5,
  },
  tagText: {
    color: '#fff',
    fontFamily: FontFamilies.ComfortaaBold,
  },
  uploadButton: {
    backgroundColor: ThemeColors.secondryColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    marginTop: 4,
    borderRadius: 15,
  },
});
