import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {
	return (
		<View style={styles.searchBarBackground}>
			<Feather name="search" style={styles.icon}/>
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.textInput}
				placeholder="Search"
				value={searchTerm}
				onChangeText={onSearchTermChange}
				onEndEditing={onSearchTermSubmit}
			/>
		</View>
	)
};

const styles = StyleSheet.create({
	searchBarBackground: {
		backgroundColor: '#F0EEEEEE',
		height: 40,
		borderRadius: 10,
		margin: 10,
		flexDirection: 'row'
	},
	textInput: {
		fontSize: 18,
		flex: 1
	},
	icon: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 5
	}
});

export default SearchBar;