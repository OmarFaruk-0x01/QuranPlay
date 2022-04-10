import {Dimensions, StyleSheet} from 'react-native';
import {FontFamilies, ThemeColors} from '../../Constants/index';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
export const OnScreenPostStyle = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  VideoContainer: {
    // flex: 1,
    width: '100%',
    height: window.height,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#000',
    paddingBottom: 50,
  },
  VideoInfoContianer: {
    padding: 5,
    zIndex: 1,

    // maxHeight: 150,
    // overflow: 'hidden',
  },
  VideoInfo: {},
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'cursive',
    marginBottom: 5,
  },
  caption: {
    width: '80%',
    fontSize: 12,
    fontWeight: '100',
    color: '#fff',
    marginBottom: 4,
    fontFamily: FontFamilies.ComfortaaRegular,
  },
  tagsContainer: {
    width: '85%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mentionContainer: {
    alignSelf: 'flex-start',
  },
  mention: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 7,
    paddingVertical: 4,
    backgroundColor: ThemeColors.secondryColor,

    margin: 1,
    borderRadius: 5,
  },
  tag: {
    fontSize: 9,
    paddingHorizontal: 7,
    paddingVertical: 4,
    backgroundColor: ThemeColors.lightGrey,
    margin: 1,
    borderRadius: 5,
    color: '#fff',
    fontFamily: FontFamilies.ComfortaaBold,
  },
  show_collaps: {},
  show_collaps_text: {
    color: '#ddd',
    fontSize: 13,
    fontFamily: FontFamilies.ComfortaaBold,
  },
  ActionSideBarContainer: {
    position: 'absolute',
    right: 10,
    bottom: 70,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  ActionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
  },
  PostAuthorProfileContainer: {
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: ThemeColors.secondryColor,
    borderRadius: 500,
    marginBottom: 10,
  },
  PostAuthorProfile: {
    borderRadius: 500,
    width: 40,
    height: 40,
    backgroundColor: '#fff',
  },
  LoveReactContainer: {},
  ActionText: {
    color: '#fff',
    marginTop: 3,
    fontSize: 12,
    fontFamily: FontFamilies.ComfortaaMedium,
  },
  PlayButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',

    transform: [{translateX: -60}, {translateY: -50}],
    zIndex: 10,
  },
});

export const CardPostStyle = StyleSheet.create({
  CardVideoContainer: {
    width: window.width / 3 - 8,
    height: 120,
    marginHorizontal: 4,
    marginTop: 14,
    elevation: 5,
  },
  CardVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  TagedSectionContainer: {
    marginVertical: 6,
  },
  TagedSectionHeader: {
    flexDirection: 'row',
    paddingHorizontal: 4,
    paddingRight: 9,
    paddingVertical: 4,
  },
  TagedIcon: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TagedSectionHeaderTitleContainer: {
    flex: 1,
  },
  TagedSectionHeaderTitle: {
    fontFamily: FontFamilies.ComfortaaBold,
    fontWeight: '900',
  },
  TagedSectionHeaderSubTitle: {
    fontFamily: FontFamilies.ComfortaaBold,
    fontSize: 9,
  },
  TagedSectionHeaderPostCount: {
    alignSelf: 'flex-start',
    backgroundColor: ThemeColors.whiterGray,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 4,
    fontSize: 13,
  },
  TagedSectionContent: {},
});
