import { useEffect, useState } from 'react';

const useLocation = () => {
	const [ipDetails, setIpDetails] = useState([]);
	const [lat, setLat] = useState(23.7686501);
	const [lng, setLng] = useState(90.3668969);

	useEffect(() => {
		console.log('geolocation initiating');
		if ('geolocation' in navigator) {
			console.log('Available');
			console.log(JSON.stringify(navigator.geolocation));
			navigator.geolocation.getCurrentPosition(function (position) {
				console.log('Location finder initiating');
				console.log(position);
				setLat(position.coords.latitude);
				setLng(position.coords.longitude);
			});
		} else {
			console.log('Not Available');
		}
	}, []);
	return { lat, lng };
};

export default useLocation;
