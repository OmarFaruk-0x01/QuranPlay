import {StyleSheet} from 'react-native';
import {FontFamilies, ThemeColors} from '../Constants';

export const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    paddingBottom: 2,
  },
  tabButtonContainer: {
    padding: 3,
    paddingTop: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButton: {
    backgroundColor: ThemeColors.secondryColor,
    width: 40,
    height: 40,
    top: -8,
  },
  tabButtons: {
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  tabButtonText: {
    fontFamily: FontFamilies.ComfortaaBold,
    fontSize: 7,
    color: '#ffff',
  },
});
