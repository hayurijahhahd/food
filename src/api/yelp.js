import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer sCQvBSbnh6zIMT1ps2wa463ySZFMWW2oI5ve1a1FNlKym_HWFAhwN88vIwJ4lBk2t727HRonZN242zdq2kQ86BKYfUUrEd3toId28cvp3EdyLxbuRjGHoxHJPPrPXXYx'
	}
});