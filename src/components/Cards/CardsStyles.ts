import {StyleSheet} from 'react-native';
import {FontFamilies, ThemeColors} from '../../Constants/index';
export const ProfileCardStyle = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
  },
  ProfilePhotoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingRight: 10,
  },
  ProfilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: ThemeColors.whiterGray,
  },
  ProfilePhotoUploadIcon: {
    position: 'absolute',
    bottom: 6,
    right: 0,
    backgroundColor: ThemeColors.lightGrey,
    padding: 4,
    borderRadius: 50,
  },
  ProfileInfoContainer: {
    flex: 2,
  },
  ProfileFollowContainer: {
    width: '100%',
  },
  ProfileFollowFollowing: {
    flexDirection: 'row',
    paddingVertical: 9,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  ProfileFollow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 20,
  },

  ProfileActionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProfileNText: {
    fontSize: 15,
    fontFamily: FontFamilies.ComfortaaBold,
  },
  ProfileFText: {
    fontSize: 9,
    fontFamily: FontFamilies.ComfortaaLight,
  },
  ProfileActionButton: {
    // paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: ThemeColors.whiterGray,
    width: '100%',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3,
  },
  ProfileActionText: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: FontFamilies.ComfortaaBold,
    marginRight: 4,
  },
  ProfileBioContainer: {
    paddingVertical: 10,
  },
  ProfileBioText: {
    textAlign: 'center',
    fontSize: 10,
    fontFamily: FontFamilies.ComfortaaLight,
  },
});

export const LocalVideoCardStyle = StyleSheet.create({
  localVideoContainer: {
    width: 120,
    height: 200,
    marginHorizontal: 4,
    marginBottom: 10,
  },
  localVideo: {
    borderRadius: 5,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: ThemeColors.whiterGray,
  },
  durationText: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    fontSize: 11,
    fontFamily: FontFamilies.ComfortaaBold,
    color: '#fff',
  },
});

export const VideoPreviewCardStyle = StyleSheet.create({
  ...LocalVideoCardStyle,
});
