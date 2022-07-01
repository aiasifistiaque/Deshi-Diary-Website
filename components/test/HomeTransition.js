import React from 'react';
import { Image, Transition } from 'semantic-ui-react';

export default function HomeTransition({ visible }) {
	//state = { animation: transitions[0], duration: 500, visible: true };
	const animation = 'slide down';
	const duration = 500;

	return (
		<Transition.Group animation={animation} duration={duration}>
			{visible && <Image centered size='small' src='/logo.png' />}
		</Transition.Group>
	);
}
