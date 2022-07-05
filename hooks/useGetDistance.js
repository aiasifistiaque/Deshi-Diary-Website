import { useEffect, useState } from 'react';
import { getDistance } from 'geolib';

const useGetDistance = geoLocation => {
	const [ipDetails, setIpDetails] = useState([]);
	const [lat, setLat] = useState();
	const [lng, setLng] = useState();
	const [distance, setDistance] = useState(0);

	useEffect(() => {
		if (lat && lng && geoLocation?.lat) {
			const distancePosition = getDistance({ lat, lng }, geoLocation);
			if (distancePosition > 1000) {
				setDistance(`${(distancePosition / 1000).toFixed(1)} Km`);
			} else {
				setDistance(`${distancePosition} m`);
			}
		}
	}, [lat, lng, geoLocation]);

	useEffect(() => {
		console.log('geolocation initiating');
		if ('geolocation' in navigator) {
			console.log('Available');
			console.log(JSON.stringify(navigator.geolocation));
			navigator.geolocation.getCurrentPosition(function (position) {
				console.log('Location finder initiating');
				setLat(position.coords.latitude);
				setLng(position.coords.longitude);
			});
		} else {
			console.log('Not Available');
		}
	}, []);
	return { lat, lng, distance };
};

export default useGetDistance;
