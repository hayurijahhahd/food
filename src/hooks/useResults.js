import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	
	const searchAPI = async () => {
		try {
			const response = await yelp.get('/search', {
				params: {
					term: searchTerm,
					location: 'new york',
					limit: 50
				}
			});
			setResults(response.data.businesses);
		} catch (e) {
			setErrorMessage('Something went wrong')
		}
	};
	
	useEffect(() => {
		searchAPI('Ramen');
	}, []);
	
	return [searchAPI, results, errorMessage];
};