import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SearchIcon from '../../../assets/images/search-icon';


const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <SearchIcon />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex:1,
    width:'100%'
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal:10,
    fontSize: 16,
  },
});

export default SearchComponent;