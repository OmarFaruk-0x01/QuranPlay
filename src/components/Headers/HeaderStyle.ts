import {StyleSheet} from 'react-native';
import {FontFamilies, ThemeColors} from '../../Constants';
export const SearchHeaderStyle = StyleSheet.create({
  HeaderContainer: {
    flexDirection: 'row',
    padding: 5,
    marginVertical: 7,
    backgroundColor: '#fff',
  },
  SearchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: ThemeColors.whiterGray,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    padding: 3,
    position: 'relative',
    overflow: 'hidden',
  },
  SearchInput: {
    flex: 1,
    padding: 0,
    fontSize: 14,
    paddingHorizontal: 2,
    paddingVertical: 3,
  },
  headerIcon: {
    flex: 0.11,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const MyProfileHeaderStyle = StyleSheet.create({
  container: {
    ...SearchHeaderStyle.HeaderContainer,
  },
  profileTitle: {
    flex: 1,
    textAlign: 'center',
    fontFamily: FontFamilies.ComfortaaBold,
  },
  ...SearchHeaderStyle,
});

export const UploadScreenHeaderStyle = StyleSheet.create({
  headerContainer: {
    // height: 40,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // elevation: 5,
  },
  headerText: {fontSize: 20},
  headerDash: {
    width: 70,
    height: 3,
    backgroundColor: ThemeColors.lightGrey,
    borderRadius: 5,
  },
});
