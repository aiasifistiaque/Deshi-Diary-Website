import React from 'react';
import Page from '../components/nav/page/Page';
import {
	Notifications,
	Notification,
} from '../components/notifications/notifications/Notification';
import Section from '../components/util/section/Section';
import { useGetNotificationsQuery } from '../store/services/apiService';

const Notificationspage = () => {
	const { data, isFetching, isError, error } = useGetNotificationsQuery();
	return (
		<Page>
			<Section title='Notifications' top>
				<Notifications
					data={data}
					isFetching={isFetching}
					error={error}
					isError={isError}>
					{data?.doc &&
						data.doc.map((item, i) => <Notification key={i} item={item} />)}
				</Notifications>
			</Section>
		</Page>
	);
};

export default Notificationspage;
