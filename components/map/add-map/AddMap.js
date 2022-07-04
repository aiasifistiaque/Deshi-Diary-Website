import React, {
	useRef,
	useEffect,
	useState,
	isValidElement,
	cloneElement,
} from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import * as lib from '../../../lib/constants';
import { Loader } from '@googlemaps/js-api-loader';
import styles from './Map.module.css';
import Label from '../../util/label/Label';
import { createCustomEqual } from 'fast-equals';

const AddMap = ({ lng, setLng, lat, setLat }) => {
	const center = { lat: 23.78, lng: 90.47 };
	const zoom = 8;
	return (
		<ReactMapComponent
			center={center}
			zoom={zoom}
			setLat={e => setLat(e)}
			setLng={e => setLng(e)}
		/>
	);
};

const ReactMapComponent = ({ center, zoom, setLat, setLng }) => {
	const ref = useRef(null);
	const [map, setMap] = useState();
	const [options, setOptions] = useState();
	const [clicks, setClicks] = React.useState({});

	const onClick = e => {
		// avoid directly mutating state
		setClicks(e.latLng);
		setLat(e.latLng.lat);
		setLng(e.latLng.lng);
	};

	useEffect(() => {
		map && map.addListener('click', onClick);
	}, [map]);

	useEffect(() => {
		if (ref.current && !map) {
			setMap(new window.google.maps.Map(ref.current, { center, zoom }));
		}
	});

	useDeepCompareEffectForMaps(() => {
		if (map) {
			map.setOptions(options);
		}
	}, [map, options]);

	const render = status => {
		switch (status) {
			case Status.LOADING:
				return <div>loading</div>;
			case Status.FAILURE:
				return <div>error</div>;
			case Status.SUCCESS:
				return (
					<div className={styles.container}>
						<div ref={ref} className={styles.map}>
							{/* {clicks && <Marker position={clicks} />} */}
							{isValidElement(<Marker position={clicks} />) &&
								cloneElement(<Marker position={clicks} />, { map })}
						</div>
					</div>
				);
		}
	};

	return <Wrapper apiKey={lib.api.map} render={render}></Wrapper>;
};

const Marker = options => {
	const [marker, setMarker] = useState();

	useEffect(() => {
		if (!marker) {
			setMarker(new google.maps.Marker());
		}

		// remove marker from map on unmount
		return () => {
			if (marker) {
				marker.setMap(null);
			}
		};
	}, [marker]);

	useEffect(() => {
		if (marker) {
			marker.setOptions(options);
		}
	}, [marker, options]);

	return null;
};

export default AddMap;

const deepCompareEqualsForMaps = createCustomEqual(deepEqual => (a, b) => {
	if (
		isLatLngLiteral(a) ||
		a instanceof google.maps.LatLng ||
		isLatLngLiteral(b) ||
		b instanceof google.maps.LatLng
	) {
		return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
	}
	// TODO extend to other types
	// use fast-equals for other objects
	return deepEqual(a, b);
});

function useDeepCompareMemoize(value) {
	const ref = React.useRef();

	if (!deepCompareEqualsForMaps(value, ref.current)) {
		ref.current = value;
	}
	return ref.current;
}

function useDeepCompareEffectForMaps(callback, dependencies) {
	React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}

function MyMapComponent({ center, zoom }) {
	const googlemap = useRef(null);

	useEffect(() => {
		const loader = new Loader({
			apiKey: lib.api.map,
			version: 'weekly',
		});
		let map;
		loader.load().then(() => {
			const google = window.google;
			map = new google.maps.Map(googlemap.current, {
				center: { lat: 23.78, lng: 90.47 },
				zoom: 10,
			});
		});
	});

	return (
		<div className={styles.container}>
			<Label>Add a location from map</Label>

			<div className={styles.map} ref={googlemap} id='map'>
				{clicks.map((latLng, i) => (
					<Marker key={i} position={latLng} />
				))}
			</div>
		</div>
	);
}
