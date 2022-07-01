import Link from 'next/link';
import React from 'react';
import { useGetSelfQuery } from '../../store/services/apiService';
import Page from '../nav/page/Page';
import ProfileContainer from '../profile/profile-page/ProfileContainer';
import { SectionItem } from '../util/section/Section';

const ProfileDashboard = () => {
	const { data, isError, error, isLoading, isFetching } = useGetSelfQuery();

	return (
		<Page>
			<ProfileContainer select='overview' title='Profile Overview'>
				{!isLoading && !isError && data && (
					<>
						<SectionItem title='Name'>
							{data?.name ? data.name : <NotSet>add name</NotSet>}
						</SectionItem>
						<SectionItem title='Email'>{data?.email && data.email}</SectionItem>
						<SectionItem title='Phone'>
							{data?.phone ? data.phone : <NotSet>set phone</NotSet>}
						</SectionItem>
						<SectionItem title='Description'>
							{data?.description ? (
								data.description
							) : (
								<NotSet>set description</NotSet>
							)}
						</SectionItem>
						<SectionItem title='Reviews'>
							{data?.reviews ? data.reviews : 0}
						</SectionItem>
						<SectionItem title='Badges'>
							{data?.badges ? data.badges : 0}
						</SectionItem>
						<SectionItem title='Points'>
							{data?.points ? data.points : 0}
						</SectionItem>
					</>
				)}
			</ProfileContainer>
		</Page>
	);
};

const NotSet = ({ children }) => {
	return (
		<Link href='/profile/manage-profile'>
			<a
				style={{
					fontSize: '.9em',
					fontWeight: '600',
				}}>
				{children}
			</a>
		</Link>
	);
};

export default ProfileDashboard;
