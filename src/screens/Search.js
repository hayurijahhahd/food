import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const Search = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchAPI, results, errorMessage] = useResults();
	
	return (
		<View>
			<SearchBar
				searchTerm={searchTerm}
				onSearchTermChange={setSearchTerm}
				onSearchTermSubmit={() => searchAPI}
			/>
			{errorMessage ? <Text style={styles.errorTextMessage}>{errorMessage}</Text> : <Text>We have found {results.length} results</Text>}
		</View>
	)
};

const styles = StyleSheet.create({
	errorTextMessage: {
		color: 'red'
	}
});

export default Search;