import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { SearchHeaderStyle } from './HeaderStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchHeader: React.FC = () => {
    return (
        <View style={SearchHeaderStyle.HeaderContainer}>
            <TouchableOpacity style={SearchHeaderStyle.headerIcon}>
                <AntDesign name={"adduser"} size={25} color={"#000"} />
            </TouchableOpacity>
            <View style={SearchHeaderStyle.SearchInputContainer}>
                <AntDesign style={{ paddingHorizontal: 3 }} size={18} color={"#000"} name={"search1"} />
                <TextInput style={SearchHeaderStyle.SearchInput} placeholder={"Search"} />
            </View>
            <TouchableOpacity style={SearchHeaderStyle.headerIcon}>
                <AntDesign name={"scan1"} size={25} color={"#000"} />
            </TouchableOpacity>
        </View>

    )
}

export default SearchHeader;