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

const ViewMap = ({ lng, lat, data }) => {
	const zoom = 15;
	return (
		<div className={styles.view}>
			<ReactMapComponent
				center={{ lat, lng }}
				zoom={zoom}
				lat={lat}
				lng={lng}
			/>

			<div className={styles.itemContainer}>
				<h3>{'Location & Details'}</h3>
				<div className={styles.items}>
					<Item image='phone-light'>{data?.phone && data.phone}</Item>
					<Item image='mail-light'>{data?.email && data.email}</Item>
					<Item image='address-light'>
						{data.street &&
							`${data.street}, ${data.city ? data.city : data.divistion} , ${
								data?.postCode && data.postCode
							}`}
					</Item>
					{data?.website && (
						<Item image='link-light' link>
							{data?.website && data.website}
						</Item>
					)}
				</div>
			</div>
		</div>
	);
};

const Item = ({ image, children, link }) => {
	return (
		<div className={styles.item}>
			<img src={`/icons/${image}.png`} alt='i' />
			{link ? (
				<a href={children} target='_blank' rel='noreferrer'>
					{children}
				</a>
			) : (
				<p>{children}</p>
			)}
		</div>
	);
};

const ReactMapComponent = ({ center, zoom, lat, lng }) => {
	const ref = useRef(null);
	const [map, setMap] = useState();
	const [options, setOptions] = useState();

	useEffect(() => {
		//if (!ref.current) return;
		setTimeout(() => {
			if (!map) {
				ref.current &&
					setMap(new window.google.maps.Map(ref.current, { center, zoom }));
			}
		}, 500);
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
					<div ref={ref} className={styles.map}>
						{isValidElement(<Marker position={{ lat, lng }} />) &&
							cloneElement(<Marker position={{ lat, lng }} />, { map })}
						{isValidElement(<InfoWindow />) && cloneElement(<InfoWindow />)}
					</div>
				);
		}
	};

	return <Wrapper apiKey={lib.api.map} render={render} />;
};

const InfoWindow = () => {
	const [info, setInfo] = useState();

	useEffect(() => {
		if (!info) {
			setInfo(
				new google.maps.InfoWindow({
					content: <div className={styles.info}>info example</div>,
				})
			);
		}

		// remove marker from map on unmount
		return () => {
			if (info) {
				//marker.setMap(null);
			}
		};
	}, [info]);
	return null;
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

export default ViewMap;

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
