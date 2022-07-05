import { useEffect, useState } from 'react';
import axios from 'axios';

const useLocation = () => {
	const [ipDetails, setIpDetails] = useState([]);
	const [lat, setLat] = useState();
	const [lon, setLon] = useState();
	useEffect(() => {
		console.log('geolocation initiating');

		if ('geolocation' in navigator) {
			console.log('Available');
			console.log(JSON.stringify(navigator.geolocation));
			navigator.geolocation.getCurrentPosition(function (position) {
				console.log('Location finder initiating');

				console.log(position);
			});
		} else {
			console.log('Not Available');
		}
	}, []);
	return null;
};

export default useLocation;
