//
import divisions from './divisionsData';
import sortData from './sortData';

const googleMapsToken = process.env.NEXT_PUBLIC_MAP_API_KEY;

export const colors = {
	primary: '#03989E',
	text: '#424242',
	light: '#EEF0F3',
};

export const TOKEN_NAME = 'DESHI_DIARY_TOKEN_1';

const localhost = process.env.NEXT_PUBLIC_BACKEND;
const backend = 'https://api-deshidiary.herokuapp.com';

const app = '';

export const api = { backend: localhost, app: app, map: googleMapsToken };

export const data = { divisions: divisions, sort: sortData };

export const placeholders = {
	profileImage: '/test/pp.png',
	image: '/test/image.png',
	badge: '/badge-placeholder.png',
};

export const transitions = [
	'browse',
	'browse right',
	'drop',
	'fade',
	'fade up',
	'fade down',
	'fade left',
	'fade right',
	'fly up',
	'fly down',
	'fly left',
	'fly right',
	'horizontal flip',
	'vertical flip',
	'scale',
	'slide up',
	'slide down',
	'slide left',
	'slide right',
	'swing up',
	'swing down',
	'swing left',
	'swing right',
	'zoom',
];
