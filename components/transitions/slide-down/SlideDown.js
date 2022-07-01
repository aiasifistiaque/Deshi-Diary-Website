import React from 'react';
import { Image, Transition } from 'semantic-ui-react';
const animation = 'slide down';
const duration = 300;

const SlideDown = ({ visible, children }) => {
	return (
		<Transition.Group animation={animation} duration={duration}>
			{visible && children}
		</Transition.Group>
	);
};

export default SlideDown;
